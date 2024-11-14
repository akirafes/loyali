import Logo from "@/app/ui/logo";

export default function AcmeLogo() {
  return (
    <div
      className={`flex flex-row items-center content-center leading-none text-white`}
    >
      <Logo className="h-16 w-44 md:h-32" />
    </div>
  );
}
// 44-32