export default {
    API_KEY: "487a20482ff4d77d58393ec2ac4c5282",
  };

  //Normal Şartlarda Projeye ait Api Key ler bir Js dosyasında olması güvenlik açığı oluşturur. Bunun yerine bir backend 
  // rest Api middleware olarak kullanılır ve cors yöntemiyle api key sunucuda gizlenir.