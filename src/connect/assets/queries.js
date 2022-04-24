export const queryAsset = (id) => {
  return `{
    asset(id:${id}) {
      url
      title
    }
  }
  `
}