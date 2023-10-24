const handleDownload = async (url, name) => {
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.click();
  await new Promise((resolve) => setTimeout(resolve, 100));
  URL.revokeObjectURL(link.href);
};

export default handleDownload;
