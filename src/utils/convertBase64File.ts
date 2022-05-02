const convertBase64File = (files: FileList | null) => {
  if(!files) return;
  const promises = [...files].map(file => {
    return new Promise<string | undefined>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result?.toString())
      }
      reader.onerror = (error) => {
        reject(error)
      }
    });
  })
  return Promise.all(promises)
}

export default convertBase64File