<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type,
  Access-Control-Allow-Headers, Authorization, X-Requested-With");


$con = mysqli_connect("localhost:80", "root","");
mysqli_select_db($con,"apitoken");
$data = json_decode(file_get_contents("php://input"));
//print_r($data);
$email = $data->email;
$password = $data->password;


$result = mysqli_query($con,"SELECT * from register where email='".$email."'
 AND password='".$password."'");
$nums = mysqli_num_rows($result);
$rs=mysqli_fetch_array($result);


if($nums>=1){
    http_response_code(200);
   $outp = "";

              
        $outp .= '{"email":"'.$rs["email"];
        $outp .= '"first_name":"'.$rs["first_name"];
        $outp .= '"last_name":"' . $rs["last_name"].' ",';
        $outp .= '"Status":"200"}';
           
    echo $outp;
 }
 else{
                                  I
     http_response_code(202);
 }
 ?>