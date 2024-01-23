'use client';

import * as React from 'react';

import { Label } from '../../components/ui/label';
import { Input } from '../../components/ui/input';
import { Button } from '../../components/ui/button';
import { cn } from '../../utils/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import waveWhite from '../../assets/waveWhite.gif';

interface LoginFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginForm({ className, ...props }: LoginFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }

    const githubIcon = (
        <FontAwesomeIcon icon={faGithub} size="xl" className="mr-1" />
    );
    const loadingIcon = <img src={waveWhite} className="w-full" />;
    return (
        <>
            <div className="absolute right-10 top-10">
                <Button variant="outline">Create Account</Button>
            </div>
            <div className="mx-auto flex w-[400px] flex-col gap-y-4">
                <h1>Sign into your account</h1>
                <div className="text-sm text-secondary">
                    Enter your details below to sign into your account
                </div>
                <div
                    className={cn('grid gap-6 text-black', className)}
                    {...props}
                >
                    <form onSubmit={onSubmit}>
                        <div className="grid gap-2">
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="email">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    placeholder="name@example.com"
                                    type="email"
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    autoCorrect="off"
                                    disabled={isLoading}
                                />
                            </div>
                            <div className="grid gap-1">
                                <Label className="sr-only" htmlFor="password">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    placeholder="password"
                                    type="password"
                                    autoCapitalize="none"
                                    autoComplete="password"
                                    autoCorrect="off"
                                    disabled={isLoading}
                                />
                            </div>
                            <Button disabled={isLoading}>
                                {isLoading ? (
                                    <div className="mr-2">{loadingIcon}</div> //spinner
                                ) : (
                                    'Sign In'
                                )}
                            </Button>
                        </div>
                    </form>
                    <div className="relative">
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="px-2 text-muted-foreground text-white before:content-['-'] after:content-['-']">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <Button
                        variant="outline"
                        type="button"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="mr-2 ">{loadingIcon}</div> //spinner
                        ) : (
                            <div className="mr-2">{githubIcon} GitHub</div> //git login icon
                        )}
                    </Button>
                </div>
                <div className="text-sm text-gray-300">
                    By clicking continue, you agree to our <br />
                    <a href="/" className="underline">
                        Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="/" className="underline">
                        Privacy Policy
                    </a>
                    .
                </div>
            </div>
        </>
    );
}
