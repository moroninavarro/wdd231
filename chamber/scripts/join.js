function openModal(texto){
   const info = document.getElementById("modal-info");
   const dialog = document.getElementById("theDetails");

   info.textContent = texto;
   dialog.showModal();

   document.getElementById("closeModal").addEventListener("click", () =>{
    dialog.close();
});

}






