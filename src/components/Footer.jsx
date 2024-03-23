export default function Footer() {
    return (
        <footer className="py-5 sm:px-10 px-5">
            <div className="screen-max-width">
                <div>
                    <p className="font-semibold text-gray-400 text-xs">
                        More ways to shop: {' '}
                        <span className="underline text-blue-600">
                             Find an Apple Store {' '}
                        </span>
                        or {' '}
                        <span className="underline text-blue-600">
                             Other retailer
                        </span>{' '}
                        near you.
                    </p>
                    <p className="font-semibold text-gray-400 text-xs">
                        Or call 0000-005-4557-2223
                    </p>
                </div>
                <div className="my-5 h-[1px] w-full bg-neutral-500"/>
                <div className="flex md:flex-row flex-col md:items-center justify-between">
                    <p  className="font-semibold text-gray-400 text-xs">All rights reserved to Apple Inc 2024.All rights reserved.</p>
                </div>
            </div>
        </footer>
)
}