import React from 'react';
import useInstallPrompt from '../../hooks/useInstallPrompt';
import Button from '../Button';

const InstallPromptPopup = () => {
    const { promptInstall, isInstalled } = useInstallPrompt();
    const [showPopup, setShowPopup] = React.useState(false);

    React.useEffect(() => {
        console.log(isInstalled)
        if (!isInstalled) {
            setShowPopup(true);
        }
    }, [isInstalled]);

    if (!showPopup || isInstalled) {
        return null;
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto text-center">
                <h2 className="text-lg font-semibold mb-4">Install PONTO SAÚDE ANGRA</h2>
                <p className="mb-4">Experience our app with offline access and faster loading times by installing it on your device.</p>
                <div className="flex justify-center gap-4">
                    <Button
                        onClick={() => {
                            promptInstall();
                            setShowPopup(false);
                        }}
                        className='w-32'
                    >
                        Install
                    </Button>
                    <Button
                        variant='bordered'
                        onClick={() => setShowPopup(false)}
                        className='w-32'
                    >
                        Maybe Later
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default InstallPromptPopup;
