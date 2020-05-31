const { request } = require("graphql-request")

const getBookData = async () => {
  const sheetPoetryAPI = "https://sheetpoetry.now.sh/graphql"
  const query = `{
    content: sheetpoem(
      spreadsheetId: "16bLauoyWcJy6aevXTagkHHnlgW2KZufXhHocVQ92qOg"
      range: "A1:A1000"
      verses: 200
    )
    title: sheetpoem(
      spreadsheetId: "16bLauoyWcJy6aevXTagkHHnlgW2KZufXhHocVQ92qOg"
      range: "C1:E1000"
      verses: 1
    )
  }`
  const { title, content } = await request(sheetPoetryAPI, query)
  return { title, content }
}

module.exports = getBookData
