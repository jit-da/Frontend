interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
    id: string;
}

export default function Input({ children, id, value, ...props }: InputProps) {
    return (
        <>
            <div className="relative h-15 w-full rounded-xl border border-gray-300 duration-200">
                <input
                    id={id}
                    className="peer text-gray1000 h-full w-full pt-4 pl-4 transition-all duration-200 focus:outline-none"
                    {...props}
                />
                <label
                    htmlFor={id}
                    className={`text-gray500 absolute top-1/2 left-4 -translate-y-1/2 transition-all duration-200 peer-focus:top-5 peer-focus:text-xs ${
                        value && "top-5 text-xs"
                    }`}
                >
                    {children}
                </label>
            </div>
        </>
    );
}
