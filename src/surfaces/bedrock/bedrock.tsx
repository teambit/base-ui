import React from 'react';
import classNames from 'classnames';
import { bedrockClass } from './bedrock.classes';

type BedrockProps = React.HTMLAttributes<HTMLDivElement>;

export default function Bedrock(props: BedrockProps){
	return (
		<div {...props} className={classNames(bedrockClass, props.className)}/>
	)
}