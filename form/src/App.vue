<script>
import { ref } from '@vue/reactivity'
export default {
  methods: {
  async handleSubmit() {
  // POST request using fetch with async/await
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ 
      name: this.name ,
      company: this.company,
      email :this.email,
      phone: this.phone,
      message: this.message
      })
  };
  const response = await fetch("https://achufam.onrender.com/send", requestOptions);
  const data = await response.json();
  this.postId = data.id;
},
  },
    setup(){
      const msg = ref('');
      const name = ref('');
      const company = ref('');
      const email = ref('');
      const phone = ref('');
      const message = ref('');

      return{msg,name,company,email,phone,message}
    }}
</script>

<template>
  <div>
    <div class="container">
    <h1 class="brand"><span>Acme</span> Web Design</h1>
    <div class="wrapper animated bounceInLeft">
      <div class="company-info">
        <h3>Acme Web Design</h3>
        <ul>
          <li><i class="fa fa-road"></i> 44 Something st</li>
          <li><i class="fa fa-phone"></i> (555) 555-5555</li>
          <li><i class="fa fa-envelope"></i> test@acme.test</li>
        </ul>
      </div>
      <div class="contact">
        <h3>Email Us</h3>
        {{msg}}
        <form @submit.prevent="handleSubmit">
          <p>
            <label>Name</label>
            <input type="text" name="name" v-model="name">
          </p>
          <p>
            <label>Company</label>
            <input type="text" name="company" v-model="company">
          </p>
          <p>
            <label>Email Address</label>
            <input type="email" name="email" v-model="email">
          </p>
          <p>
            <label>Phone Number</label>
            <input type="text" name="phone" v-model="phone">
          </p>
          <p class="full">
            <label>Message</label>
            <textarea name="message" rows="5" v-model="message"></textarea>
          </p>
          <p class="full">
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>


*{
    box-sizing: border-box;
  }
  
  body{
    background:#92bde7;
    color:#485e74;
    line-height:1.6;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    padding:1em;
  }
  
  .container{
    max-width:1170px;
    margin-left:auto;
    margin-right:auto;
    padding:1em;
  }
  
  ul{
    list-style: none;
    padding:0;
  }
  
  .brand{
    text-align: center;
  }
  
  .brand span{
    color:#fff;
  }
  
  .wrapper{
    box-shadow: 0 0 20px 0 rgba(72,94,116,0.7);
  }
  
  .wrapper > *{
    padding: 1em;
  }
  
  .company-info{
    background:#c9e6ff;
  }
  
  .company-info h3, .company-info ul{
    text-align: center;
    margin:0 0 1rem 0;
  }
  
  .contact{
    background:#f9feff;
  }
  
  /* FORM STYLES */
  .contact form{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:20px;
  }
  
  .contact form label{
    display:block;
  }
  
  .contact form p{
    margin:0;
  }
  
  .contact form .full{
    grid-column: 1 / 3;
  }
  
  .contact form button, .contact form input, .contact form textarea{
    width:100%;
    padding:1em;
    border:1px solid #c9e6ff;
  }
  
  .contact form button{
    background:#c9e6ff;
    border:0;
    text-transform: uppercase;
  }
  
  .contact form button:hover,.contact form button:focus{
    background:#92bde7;
    color:#fff;
    outline:0;
    transition: background-color 2s ease-out;
  }
  
  /* LARGE SCREENS */
  @media(min-width:700px){
    .wrapper{
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
  
    .wrapper > *{
      padding:2em;
    }
  
    .company-info h3, .company-info ul, .brand{
      text-align: left;
    }
  }
</style>
