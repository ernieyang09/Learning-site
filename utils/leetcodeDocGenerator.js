const { request, gql } = require('graphql-request')
const path = require('path')
const fs = require('fs')
const ejs = require('ejs')
const inquirer = require('inquirer')

const args = process.argv.slice(2)

const [qNunber] = args

if (qNunber === undefined) {
  console.warn('No question number!!!')
  return
}

inquirer.registerPrompt('directory', require('inquirer-select-directory'))

const main = async () => {
  const { from: folder } = await inquirer.prompt([
    {
      type: 'directory',
      name: 'from',
      message: 'Where you like to put this component?',
      basePath: `${process.cwd()}/docs/leetcode`,
    },
  ])

  const document = gql`
    query problemsetQuestionList(
      $categorySlug: String
      $limit: Int
      $skip: Int
      $filters: QuestionListFilterInput
    ) {
      problemsetQuestionList: questionList(
        categorySlug: $categorySlug
        limit: $limit
        skip: $skip
        filters: $filters
      ) {
        total: totalNum
        questions: data {
          acRate
          difficulty
          freqBar
          frontendQuestionId: questionFrontendId
          isFavor
          paidOnly: isPaidOnly
          status
          title
          titleSlug
          topicTags {
            name
            id
            slug
          }
          hasSolution
          hasVideoSolution
        }
      }
    }
  `

  const {
    problemsetQuestionList: {
      questions: [q],
    },
  } = await request('https://leetcode.com/graphql/', document, {
    categorySlug: '',
    skip: 0,
    limit: 1,
    filters: { searchKeywords: qNunber },
  })
  const replace = {
    slug: `${q.frontendQuestionId}-${q.titleSlug}`,
    title: `${q.frontendQuestionId}. ${q.title}`,
    difficulty: q.difficulty,
    link: `https://leetcode.com/problems/${q.titleSlug}/description/`,
  }
  const tpl = fs.readFileSync(`${__dirname}/template.ejs`, 'utf-8')
  const template = ejs.compile(tpl)

  const maxIdx = Math.max(
    ...fs.readdirSync(folder).map((f) => {
      if (!/[\d]{5}-.*\.mdx/.test(f)) {
        return 0
      }
      return parseInt(f.slice(0, 6))
    }),
  )

  const newIdx = (maxIdx + 1).toString().padStart(5, '00000')

  fs.writeFileSync(
    `${folder}/${newIdx}-${q.frontendQuestionId}.${q.titleSlug}.mdx`,
    template(replace),
  )
}

try {
  main()
} catch (e) {
  console.error(e)
  process.exit()
}
