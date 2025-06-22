import { minio } from "@/minio";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";

export const ResumeDownload = async () => {
  const downloadURL = await minio.presignedUrl(
    "GET",
    process.env.MINIO_PERSONAL_BUCKET_NAME!,
    process.env.MINIO_RESUME_FILE_NAME!,
  );

  return (
    <Link
      className="inline-block sm:flex sm:items-center cursor-pointer"
      target="_blank"
      rel="noreferrer"
      href={downloadURL}
    >
      <FaFilePdf className="text-gray-500 text-2xl mr-2 sm:text-xl sm:mr-1" />
      <span className="hidden sm:inline-block sm:text-gray-500">resume</span>
    </Link>
  );
};
