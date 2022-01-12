# yocket-task

The API has following routes ->

- SignUp route `POST` `https://yocket-task.herokuapp.com/api/v1/auth/signup` <br/>
Request Body should have following properties <br/>
  `{ name, email, password }`
  
- LogIn route `POST` `https://yocket-task.herokuapp.com/api/v1/auth/signup` <br/>
  Needs same properties like signUp
  
  Both above route return a jwt cookie after successfull execution
  
- createPost route `POST` `https://yocket-task.herokuapp.com/api/v1/posts/create` <br/>
  This route requies form data which is <br/>
  `{ Title - String, Content - String, img - file }`
    
- allPosts route 'GET' `https://yocket-task.herokuapp.com/api/v1/posts/all` <br/>
  Request Body can have following properties <br/>
  `{ page, limit }`
  If not given default value value for page is 1 and limit is 10
    
- deletePost route 'DELETE' `https://yocket-task.herokuapp.com/api/v1/posts/delete` <br/>
  Request Body will have the `postId` which is the id of the to be deleted
