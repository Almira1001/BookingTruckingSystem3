// ============================================================
// firebase-sync.js
// File ini TERPISAH dari app.js — tidak mengubah kode apapun
// Cara kerja: "menyadap" saveState() agar auto-sync ke Firebase
// ============================================================

(function () {

  // Tunggu sampai app.js selesai load dan semua variabel siap
  window.addEventListener('load', function () {

    // Pastikan Firebase sudah siap
    if (!window.db) {
      console.warn('[Firebase Sync] window.db tidak ditemukan. Cek index.html.');
      return;
    }

    // ── 1. PATCH saveState ──────────────────────────────────
    // Simpan referensi fungsi asli dari app.js
    const _originalSaveState = window.saveState;

    // Timpa saveState dengan versi yang juga sync ke Firebase
    window.saveState = function () {
      // Jalankan saveState asli dulu (localStorage tetap jalan normal)
      if (typeof _originalSaveState === 'function') {
        _originalSaveState();
      }

      // Ambil state terbaru dari localStorage (hasil saveState asli)
      try {
        const raw = localStorage.getItem('tps_state');
        if (!raw) return;
        const stateToSave = JSON.parse(raw);

        // Push ke Firebase — hanya data order/container, bukan info login
        window.db.ref('tps_state/orders').set(stateToSave.orders || []);
        window.db.ref('tps_state/containers').set(stateToSave.containers || {});
        window.db.ref('tps_state/availability').set(stateToSave.availability || {});
        window.db.ref('tps_state/attachments').set(stateToSave.attachments || {});
        window.db.ref('tps_state/outstanding_data').set(stateToSave.outstanding_data || []);
        window.db.ref('tps_state/notifications').set(stateToSave.notifications || []);

      } catch (err) {
        console.error('[Firebase Sync] Gagal push ke Firebase:', err);
      }
    };

    console.log('[Firebase Sync] saveState berhasil di-patch ✅');

    // ── 2. REALTIME LISTENER ────────────────────────────────
    // Dengarkan perubahan dari Firebase — update otomatis jika
    // ada user lain yang menyimpan data
    window.db.ref('tps_state').on('value', function (snapshot) {
      const fbData = snapshot.val();
      if (!fbData) return;

      // Ambil state lokal saat ini
      const raw = localStorage.getItem('tps_state');
      if (!raw) return;

      try {
        const localState = JSON.parse(raw);

        // Hanya update bagian data (bukan auth/login user)
        let changed = false;
        const fields = ['orders', 'containers', 'availability', 'attachments', 'outstanding_data', 'notifications'];

        fields.forEach(function (key) {
          if (fbData[key] !== undefined) {
            const fbStr = JSON.stringify(fbData[key]);
            const localStr = JSON.stringify(localState[key]);
            if (fbStr !== localStr) {
              localState[key] = fbData[key];
              changed = true;
            }
          }
        });

        if (changed) {
          // Simpan update ke localStorage
          localStorage.setItem('tps_state', JSON.stringify(localState));

          // Update state di app.js (variable global)
          if (typeof window.state !== 'undefined') {
            fields.forEach(function (key) {
              if (fbData[key] !== undefined) {
                window.state[key] = fbData[key];
              }
            });
          }

          // Re-render tampilan
          if (typeof window.render === 'function') {
            window.render();
          }

          console.log('[Firebase Sync] Data diperbarui dari Firebase ✅');
        }

      } catch (err) {
        console.error('[Firebase Sync] Gagal proses update dari Firebase:', err);
      }
    });

    console.log('[Firebase Sync] Realtime listener aktif ✅');
  });

})();
