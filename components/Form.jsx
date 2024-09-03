import React from 'react'
import Link from 'next/link'
const Form = ({type, prompt, setPrompt, submitting, handleSubmit}) => {
  return (
    <div>
       <section className="w-full max-w-full flext-start flex-col">
          <h1 className="head_text text-left">
          <span className="blue_gradient">{type} Post</span></h1>
          <p className="desc text-left max-w-md">
            {type} and share amazing prompt with the world and let your imagination run wild with any AI-pwoered platform
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
            >
              <label>
                <span className="font=satoshi font-semibold text-base text-gray-700">Your AI Prompt</span>
              </label>

              <textarea 
                value={prompt.prompt}
                onChange={(e)=>setPrompt({
                  ...prompt,
                  prompt: e.target.value
                })}
                placeholder="Write your prompt here"
                required
                className="form_textarea"
                >

                </textarea>

                <label>
                <span className="font=satoshi font-semibold text-base text-gray-700">Tag</span></label>

                <input
                  value={prompt.tag}
                  onChange={(e)=>setPrompt({
                    ...prompt,
                    tag: e.target.value
                  })}
                  placeholde="#tag"
                  requiredclassName="form_input"
                >

                </input>
              <div className="flex-end mx-3 mb-5 gap-4">
                <Link href="/" className="text-gray-500 text-sm">
                Cancel</Link>
                <button 
                type="submit"
                disabled={submitting}
                className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
                >
                  {submitting ? `${type}...` : type}
                </button>
              </div>
            </form>
       </section>
    </div>
  )
}

export default Form
