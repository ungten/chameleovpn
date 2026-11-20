import { SVGAttributes } from 'react';

export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M11 22C6 22 2 17.5 2 12C2 6.5 6 2 11 2C13.2 2 15.2 2.9 16.7 4.3L19.3 2C22.4 5.1 22.8 9.9 20.6 13.4C20 14.3 18.7 14.3 17.9 13.5L16.7 12.3C15.2 10.9 13.2 10 11 10C9.4087 10 7.88258 10.6321 6.75736 11.7574C5.63214 12.8826 5 14.4087 5 16C5 17.5913 5.63214 19.1174 6.75736 20.2426C7.88258 21.3679 9.4087 22 11 22ZM11 22C12.0609 22 13.0783 21.5786 13.8284 20.8284C14.5786 20.0783 15 19.0609 15 18C15 16.9391 14.5786 15.9217 13.8284 15.1716C13.0783 14.4214 12.0609 14 11 14C10.4696 14 9.96086 14.2107 9.58579 14.5858C9.21071 14.9609 9 15.4696 9 16C9 16.5304 9.21071 17.0391 9.58579 17.4142C9.96086 17.7893 10.4696 18 11 18M14 7H14.01"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#9CD500"
            />
            <path
                d="M18 7C18 8.933 16.433 10.5 14.5 10.5C12.567 10.5 11 8.933 11 7C11 5.067 12.567 3.5 14.5 3.5C16.433 3.5 18 5.067 18 7Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#9CD500"
            />
            <path
                d="M8 10.8L6 10L7 8M22 22C21.4696 22 20.9609 21.7893 20.5858 21.4142C20.2107 21.0391 20 20.5304 20 20V13.9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke="#9CD500"
            />
        </svg>
    );
}
