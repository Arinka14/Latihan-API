<?php
$data = file_get_contents(__DIR__ . '/Data/Studi.json');
$menu = json_decode($data, true);
?>

<!DOCTYPE html>
<html lang="en">
  <head>  
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Menu Hokben</title>
  </head>
  <body>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src="img/LogoHokben.avif" width="120">
    </a>
  </div>
</nav>

<div class="container">
  <div class="row mt-3">
    <div class="col">
      <h1>Menu</h1>
    </div>
  </div>

  <div class="row">  
    <?php foreach ($menu['menu'] as $row): ?>
      <div class="col-md-4">
        <div class="card mb-3">
         <img src="img/<?= $row['Gambar']; ?>" class="card-img-top" alt="<?= $row['nama']; ?>" style="max-height: 200px; object-fit: cover;">
          <div class="card-body">
            <h5 class="card-title"><?= $row['nama']; ?></h5>
            <p class="card-text"><?= $row['deskripsi']; ?></p>
            <h5 class="card-title">Rp <?= number_format($row['harga'], 0, ',', '.'); ?></h5>
            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
          </div>
        </div>
      </div>
    <?php endforeach; ?>
  </div>
</div>
  </body>
</html>
