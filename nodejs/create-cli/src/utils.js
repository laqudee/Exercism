import fs from 'node:fs'
import download from 'download-git-repo'
import ora from 'ora'

const spinner = ora('downloading template...')

// validate path
export const checkPath = (path) => {
  return fs.existsSync(path)
}

// download template
export const downloadTemp = (branch, project) => {
  spinner.start()
  return new Promise((resolve, reject) => {
    download(`direct:${branch}`, project, { clone: true }, (err) => {
      spinner.stop()
      if (err) {
        reject(err)
      } else {
        resolve()
        spinner.succeed('download template success')
      }
    })
  })
}
