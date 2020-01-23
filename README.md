## react-admin-OrderImageInput

react-admin 의 fileInput을 커스텀하여 react-sortable-hoc 를 적용하였다.      
react-admin 의 imageinput 을 drag로 ordering 할 수 있게 구현하였다.

react-admin ver 2.8
```
if (data.length > 0) {
                formData.images = data
              }
```
react-admin ver 3.1
```
if (data.length > 0) {
                form.batch(() => {
                  form.change('mainImages', data)
                })
              }
```

used react-dropzone ver 4.0.1
![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fk.kakaocdn.net%2Fdn%2Ft7mbK%2FbtqBr7irrXO%2FJs9Lb10uSFsN3fb9MLXAjK%2Fimg.gif)

add gridexample
