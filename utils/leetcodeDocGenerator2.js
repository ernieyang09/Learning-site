const { request, gql } = require('graphql-request')
const fs = require('fs')
const ejs = require('ejs')

const args = process.argv.slice(2)

const [qNunber] = args

if (qNunber === undefined) {
  console.warn('No question number!!!')
  return
}

const createFolderIfNotExists = (folderName) => {
  const folderPath = `${process.cwd()}/docs/leetcode/${folderName}`
  try {
    fs.accessSync(folderPath, fs.constants.F_OK)
  } catch (err) {
    try {
      fs.mkdirSync(folderPath)
    } catch (err) {}
  }
  return folderPath
}

const main = async () => {
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
    slug: `/leetcode/${q.frontendQuestionId}-${q.titleSlug}`,
    title: `${q.frontendQuestionId}. ${q.title}`,
    difficulty: q.difficulty,
    link: `https://leetcode.com/problems/${q.titleSlug}/description/`,
  }
  const tpl = fs.readFileSync(`${__dirname}/template.ejs`, 'utf-8')
  const template = ejs.compile(tpl)

  const folder = createFolderIfNotExists(Math.floor(q.frontendQuestionId / 100) * 100)

  fs.writeFileSync(
    `${folder}/${q.frontendQuestionId.padStart(6, '000000')}.${q.titleSlug}.mdx`,
    template(replace),
  )
}

try {
  main()
} catch (e) {
  console.error(e)
  process.exit()
}
