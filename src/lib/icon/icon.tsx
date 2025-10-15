import { FC } from "react";
import styled from "styled-components";
import { icons } from "./icons-set";

/**
 * Интерфейс для свойств компонента Icon
 */
export interface ISvgProps {
	/**
	 * Меняет display с inline-block на block для блочного отображения
	 */
	block?: boolean;

	/**
	 * Название иконки из набора icons-set
	 */
	iconName?: string;

	/**
	 * Размер иконки в пикселях
	 */
	size?: number;
}

const Svg = styled.svg<ISvgProps>`
	display: ${(props) => (props.block ? "block" : "inline-block")};
	vertical-align: middle;
	shape-rendering: inherit;
	transform: translate3d(0, 0, 0);
`;

const Path = styled.path`
	fill: currentColor;
`;

/**
 * Компонент Icon - векторная иконка из набора Feather Icons
 *
 * @param iconName - Название иконки из набора icons-set (по умолчанию: "browser")
 * @param block - Блочное отображение вместо inline-block (по умолчанию: false)
 * @param size - Размер иконки в пикселях (по умолчанию: 24)
 * @param props - Дополнительные SVG проперти
 */
export const Icon: FC<ISvgProps> = ({
	iconName = "browser",
	block = false,
	size = 24,
	...props
}) => {
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			width={size}
			height={size}
			block={block}
			{...props}
		>
			<Path d={icons[iconName]} />
		</Svg>
	);
};
