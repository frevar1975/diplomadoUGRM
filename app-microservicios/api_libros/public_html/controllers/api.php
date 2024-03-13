<?php


class API extends Controller{

    function __construct(){
        parent::__construct();
    }

    function render(){
        
        echo '{"mensaje": "Hola desde PHP!"}';
    }

    function get($args){
        
        $id = $args[0];
        $token = $args[1];

        $libro = new APIModel();
        $item = $libro->get($id);

        $res = [];
        $res['id'] = $item->id;
        $res['title'] = $item->title;
        $res['cover'] = $item->cover;
        $res['id_user'] = $item->id_user;

        $handle = fopen("http://127.0.0.1:3001/posts", "rb");
        $contents = stream_get_contents($handle);
        error_log($contents);
        fclose($handle);

        echo json_encode($res);
    }

    function get_all($args){
        $id_user = $args[0];
        $token   = $args[1];
        error_log('API get all: id user:' . $id_user . ', token=' . $token);
        $libro   = new APIModel();
        $items   = $libro->getAll($id_user);

        echo json_encode($items);
        
    }

    function authenticate(){
    }

    function saludo(){
        
    }
}

?>