# yocket-task

The API has following routes ->

- **SignUp route** `POST` `https://yocket-task.herokuapp.com/api/v1/auth/signup` <br/>
Request Body should have following properties <br/>
  `{ name, email, password }`
  
  ![signUp](https://user-images.githubusercontent.com/42792434/149130305-6b9a6e84-3239-47dc-a940-a48136dfce1a.png)

  
- **LogIn route** `POST` `https://yocket-task.herokuapp.com/api/v1/auth/signup` <br/>
  Needs same properties like signUp
  
  ![logIn](https://user-images.githubusercontent.com/42792434/149130367-6b6fbc54-0522-4f4d-bcfe-d5d62a6b13a7.png)

  
  **Both above route return a jwt cookie after successfull execution**
  
- **createPost route** `POST` `https://yocket-task.herokuapp.com/api/v1/posts/create` <br/>
  This route requies form data which is <br/>
  `{ Title - String, Content - String, img - file }`
  
  ![createPost](https://user-images.githubusercontent.com/42792434/149130605-5092b405-35d0-4480-a3fc-48b35064845a.png)
    
- **allPosts route** `GET` `https://yocket-task.herokuapp.com/api/v1/posts/all` <br/>
  Request Body can have following properties <br/>
  `{ page, limit }`
  If not given default value value for page is 1 and limit is 10
  
  ![getAllPosts](https://user-images.githubusercontent.com/42792434/149130680-58627f6e-af2e-4cfc-99be-04d538b7ce35.png)

    
- **deletePost route** `DELETE` `https://yocket-task.herokuapp.com/api/v1/posts/delete` <br/>
  Request Body will have the `postId` which is the id of the to be deleted
  
  ![deletePost](https://user-images.githubusercontent.com/42792434/149130718-9061faf4-7109-4b55-87ea-58c85ac4e1b6.png)

