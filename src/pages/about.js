import React from "react"

const About = ({ data: { prismicAboutPage } }) => (
  <React.Fragment>
    <h1>{prismicAboutPage.data.title.text}</h1>
    <div
      dangerouslySetInnerHTML={{ __html: prismicAboutPage.data.perex.html }}
    />
		{console.log(prismicAboutPage.data.body[0].items)}

		<ul>
			{prismicAboutPage.data.body[0].items.map((item, key) => (
				<li key={key}>
					<div dangerouslySetInnerHTML={{ __html: item.question.html }} />
					<div dangerouslySetInnerHTML={{ __html: item.answer.html }} />
				</li>
			))}
		</ul>

  </React.Fragment>
)

export default About

export const pageQuery = graphql`
  query AboutQuery {
    prismicAboutPage {
      data {
        title {
          text
        }
        perex {
          html
        }
				body {
          items {
            question {
              html
            }
            answer {
              html
            }
          }
        }
      }
    }
  }
`
