import Feed from "@/components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
          Discover & Share
          <br className="max-md:hidden"/>
          <span className="orange_gradient text-center"> Ai-Powered Prompt</span>
        </h1>
        <p className="desc text-center">Nextprompts is an open-source AI-prompting tool desinded for the modern world to descover and share great Prompts</p>
          <Feed />
    </section>
  )
}

export default Home
