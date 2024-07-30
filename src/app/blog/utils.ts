import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// get all the mdx files in the blog directory
function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}
// read data form those files
function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  let rawContent = fs.readFileSync(filePath, 'utf-8');
  return matter(rawContent);
}
// present the mdx data and metadata
function getMDXData(dir: string) {
  let mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    let { data: metadata, content } = readMDXFile(path.join(dir, file));
    let slug = path.basename(file, path.extname(file));
    return {
      metadata,
      content,
      slug,
    }
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'src', 'app', 'blog', 'contents'));
}

export function formatDate(date: string, includeRelative = true) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`
  }

  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = '';
  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'today';
  }

  let fullDate = targetDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  if (!includeRelative) {
    return fullDate;
  } else {
    return `${fullDate} (${formattedDate})`;
  }
}