<?php

$nom = $_POST['name'];
$email = $_POST['mail'];
$motdepasse = $_POST['password'];

// Requête d'insertion dans la base de données
$sql = "INSERT INTO utilisateurs (nom, email, motdepasse) VALUES ('$nom', '$email', '$motdepasse')";

if (mysqli_query($connexion, $sql)) {
	echo "Inscription réussie !";
} else {
	echo "Erreur : " . $sql . "<br>" . mysqli_error($connexion);
}

// Fermeture de la connexion à la base de données
mysqli_close($connexion);
?>
