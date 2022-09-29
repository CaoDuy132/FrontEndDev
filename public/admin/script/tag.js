$(document).ready(function () {
    addTag();
    editColor();
    deleteColor();
});
function deleteColor(){
  $(".deleteColor").click(function (e) { 
    e.preventDefault();
    let idColor= $(this).attr('data-id');
    Swal.fire({
      icon:'question',
      title: 'Bạn muốn xóa màu ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Xóa',
      denyButtonText: `Giữ lại !`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        $.ajax({
          type: "post",
          url: "http://127.0.0.1:3000/api/deleteColor",
          data: {idColor:idColor},
          dataType: "JSON",
          success: function (response) {
            if(response.check==true){
              const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
                
                Toast.fire({
                  icon: 'success',
                  title: 'Đã xóa thành công'
                }).then(()=>{
                  window.location.reload();
                })
          }else{
              if(response.message=='rejected'){
                  const Toast = Swal.mixin({
                      toast: true,
                      position: 'top-end',
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                      }
                    })
                    
                    Toast.fire({
                      icon: 'error',
                      title: 'Dữ liệu không hợp lệ'
                    });
              }else if(response.message=='exist'){
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
                
                Toast.fire({
                  icon: 'error',
                  title: 'Tồn tại sản phẩm có màu sắc này'
                });
              }
          }
          }
        });
      } else if (result.isDenied) {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'OK! Giữ lại'
        })
      }
    })
  });
}
/**
 * 
 * 
 * 
 */

function addTag(){
    $("#saveTagBtn").click(function (e) { 
        e.preventDefault(); 
        var tagname = $("#newTagName").val().trim();
        if(tagname==''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tên tag không được để trống',
              })
        }else{
            $.ajax({
                type: "post",
                url: "http://127.0.0.1:3000/api/addTag",
                data: {
                    tagname:tagname
                },
                dataType: "JSON",
                success: function (response) {
                    if(response.check==true){
                        const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                          })
                          
                          Toast.fire({
                            icon: 'success',
                            title: 'Đã thêm thành công'
                          }).then(()=>{
                            window.location.reload();
                          })
                    }else{
                        if(response.message=='rejected'){
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                  toast.addEventListener('mouseenter', Swal.stopTimer)
                                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                              })
                              
                              Toast.fire({
                                icon: 'error',
                                title: 'Dữ liệu không hợp lệ'
                              });
                        }else if(response.message=='exist'){
                          const Toast = Swal.mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            timerProgressBar: true,
                            didOpen: (toast) => {
                              toast.addEventListener('mouseenter', Swal.stopTimer)
                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                          })
                          
                          Toast.fire({
                            icon: 'error',
                            title: 'Đã tồn tại tag này'
                          });
                        }
                    }
                }
            });
        }
    });
}
/**
 * 
 * 
 * 
 */
function editColor(){
  $('.colorclass').click(function (e) { 
    e.preventDefault();
    let idColor= $(this).attr('data-id');
    $('#submiteditTag').click(function (e) { 
      e.preventDefault();
      var colorname1 = $("#newColorName1").val().trim();
      var newColorcode1 = $("#newColorpath1").val().trim();
      if(colorname1==''){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'Thiếu tên màu'
        })
      }else if(newColorcode1==''){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'error',
          title: 'Thiếu mã màu'
        })
      }else{
        $.ajax({
          type: "post",
          url: "http://127.0.0.1:3000/api/editColor",
          data: {
            idColor:idColor,
            colorname:colorname1,
            newColorcode:newColorcode1,
          },
          dataType: "JSON",
          success: function (response) {
            if(response.check==true){
              const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
                
                Toast.fire({
                  icon: 'success',
                  title: 'Đã đổi thành công'
                }).then(()=>{
                  window.location.reload();
                })
          }else{
              if(response.message=='rejected'){
                  const Toast = Swal.mixin({
                      toast: true,
                      position: 'top-end',
                      showConfirmButton: false,
                      timer: 3000,
                      timerProgressBar: true,
                      didOpen: (toast) => {
                        toast.addEventListener('mouseenter', Swal.stopTimer)
                        toast.addEventListener('mouseleave', Swal.resumeTimer)
                      }
                    })
                    
                    Toast.fire({
                      icon: 'error',
                      title: 'Dữ liệu không hợp lệ'
                    });
              }else if(response.message=='exist'){
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
                
                Toast.fire({
                  icon: 'error',
                  title: 'Đã tồn tại màu sắc này'
                });
              }
          }
          }
        });
      }
    });
  });
}