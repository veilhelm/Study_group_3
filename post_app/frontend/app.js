const title = document.querySelector("post-title")
const content = document.querySelector(".post-content")

const updateContent = async () => {
  const {data} = await axios({
    method: "GET",
    baseURL: "http://127.0.0.1:4000",
    url: "post"
  })
  title.innerHTML= data.title
  content.innerHTML= data.body
}

updateContent()
