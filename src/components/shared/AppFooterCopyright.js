function AppFooterCopyright() {
  return (
    <div className="font-general-regular flex justify-center items-center text-center">
      <div className="text-lg text-ternary-dark dark:text-ternary-light">
        &copy; {new Date().getFullYear()}
        <p className="  ml-1 duration-500">
          ©JustMe. All Rights Reserved.
        </p>

        <p className="text-secondary-dark dark:text-secondary-light font-medium uppercase  ml-1 duration-500">
          JustMe
        </p>
      </div>
    </div>
  );
}

export default AppFooterCopyright;
