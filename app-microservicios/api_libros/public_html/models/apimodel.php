<?php

class APIModel extends Model{

    public $id;
    public $title;
    public $cover;
    public $id_user;

    public function __construct(){
        parent::__construct();

        $this->id = '';
        $this->title = '';
        $this->cover = '';
        $this->id_user = '';
    }

    public function save(){
        try{
            $query = $this->prepare('INSERT INTO libros (title, cover, id_user) VALUES(:title, :cover, :id_user )');
            $query->execute([
                'title'  => $this->title, 
                'cover'  => $this->cover,
                'id_user'      => $this->id_user
                ]);
            return true;
        }catch(PDOException $e){
            echo $e;
            return false;
        }
    }

    public function get($id){
        try{
            $query = $this->prepare('SELECT * FROM libros WHERE id = :id');
            $query->execute([ 'id' => $id]);
            $item = $query->fetch(PDO::FETCH_ASSOC);

            $this->id       = $item['id'];
            $this->title    = $item['title'];
            $this->cover    = $item['cover'];
            $this->id_user  = $item['id_user'];

            return $this;
        }catch(PDOException $e){
            return false;
        }
    }

    public function getAll($id_user){

        $items = [];

        try{
            $query = $this->prepare('SELECT * FROM libros WHERE id_user = :id_user');
            $query->execute([ 'id_user' => $id_user]);
            
            while($p = $query->fetch(PDO::FETCH_ASSOC)){
                array_push($items, $p);
            }
            return $items;
        }catch(PDOException $e){
            return false;
        }
    }
    
    public function getId(){
        return $this->id;
    }

    public function setTitle($value){
        $this->title = $value;
    }

    public function getTitle(){
        return $this->title;
    }

    public function setCover($value){
        $this->cover = $value;
    }

    public function getCover(){
        return $this->cover;
    }

    public function setIdUser($value){
        $this->id_user = $value;
    }

    public function getIdUser(){
        return $this->id_user;
    }
}

?>