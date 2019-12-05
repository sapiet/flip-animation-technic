<?php
    $title = explode(' ', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto atque aut deleniti illum maxime numquam officia perspiciatis possimus quidem sapiente, sequi tempore tenetur, voluptate. Aperiam commodi facilis perspiciatis quasi voluptatum');
?><!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>FLIP technic animation</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <div class="row mt-3">
            <?php for ($i = 0; $i < 10; $i++): ?>
                <div class="card-container col-sm-6 col-md-4 col-lg-3 col-xl-2 mt-3 mb-3" id="card-container-<?= $i ?>">
                    <div class="card">
                        <img src="https://picsum.photos/300/200?random=<?= $i ?>" class="card-img-top">
                        <div class="card-body">
                            <p class="card-text">
                                <?php shuffle($title) ?>
                                <?= ucfirst(strtolower(trim(implode(' ', array_slice($title, 0, 3)), ' .,'))) ?>
                            </p>
                        </div>
                    </div>
                </div>
            <?php endfor; ?>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>
