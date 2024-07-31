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

export function getTermsOfServices() {
  return getMDXData(path.join(process.cwd(), 'src', 'app', 'terminos-de-servicio'));
}

export function getPrivacyPolicy() {
  return getMDXData(path.join(process.cwd(), 'src', 'app', 'politica-de-privacidad'));
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
    formattedDate = yearsAgo > 1 ? `hace ${yearsAgo} años` : 'hace 1 año';
  } else if (monthsAgo > 0) {
    formattedDate = monthsAgo > 1 ? `hace ${monthsAgo} meses` : 'hace 1 mes';
  } else if (daysAgo > 0) {
    formattedDate = `hace ${daysAgo} días`;
  } else {
    formattedDate = 'hoy';
  }

  let fullDate = targetDate.toLocaleString('es-MX', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  if (!includeRelative) {
    return fullDate;
  } else {
    return `${fullDate} (${formattedDate})`;
  }
}