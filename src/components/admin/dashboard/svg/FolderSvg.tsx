export default function FolderSvg({ stroke }: { stroke: string }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 10V16C21 20 20 21 16 21H6C2 21 1 20 1 16V6C1 2 2 1 6 1H7.5C9 1 9.33 1.44 9.9 2.2L11.4 4.2C11.78 4.7 12 5 13 5H16C20 5 21 6 21 10Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
}
