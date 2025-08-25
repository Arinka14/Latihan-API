function tampilkanSemuaMenu() {
    $.getJSON('Data/Studi.json', function (Data) {
        let menu = Data.menu;
        let content = '';

        $.each(menu, function (i, item) {
            content += `
            <div class="col-md-4 mb-3">
                <div class="card" style="width: 18rem;">
                    <img src="Data/img/${item.img}" class="card-img-top" alt="${item.nama}">
                    <div class="card-body">
                        <h5 class="card-title">${item.nama}</h5>
                        <p class="card-text">${item.deskripsi}</p>
                        <h5 class="card-title">Rp ${item.harga.toLocaleString('id-ID')}</h5>
                        <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                    </div>
                </div>
            </div>`;
        });

        $('#daftar-menu').html(content);
    }).fail(() => {
        $('#daftar-menu').html('<p class="text-danger">Gagal memuat data menu.</p>');
    });
}

        tampilkanSemuaMenu();

            $('.nav-link').on('click', function (e) {
                e.preventDefault();

                $('.nav-link').removeClass('active');
                $(this).addClass('active');

                    let kategori = $(this).html();
                    $('h1').html(kategori);

                        if (kategori.toLowerCase() === 'all menu') {
                            tampilkanSemuaMenu();
                            return;
                        }

                $.getJSON('Data/Studi.json', function (Data) {
                    let menu = Data.menu;
                    let content = '';

        $.each(menu, function (i, item) {
            if (item.kategori.toLowerCase() === kategori.toLowerCase()) {
                content += `
                <div class="col-md-4 mb-3">
                    <div class="card" style="width: 18rem;">
                        <img src="Data/img/${item.img}" class="card-img-top" alt="${item.nama}">
                        <div class="card-body">
                            <h5 class="card-title">${item.nama}</h5>
                            <p class="card-text">${item.deskripsi}</p>
                            <h5 class="card-title">Rp ${item.harga.toLocaleString('id-ID')}</h5>
                            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
                        </div>
                    </div>
                </div>`;
            }
        });

        if (content === '') {
            content = `<p class="text-muted">Menu kategori "${kategori}" tidak ditemukan.</p>`;
        }

        $('#daftar-menu').html(content);
    }).fail(() => {
        $('#daftar-menu').html('<p class="text-danger">Gagal memuat data menu.</p>');
    });
});
