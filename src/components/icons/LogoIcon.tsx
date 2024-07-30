import { FC } from 'react';
import { IconDefaultProps } from '../../types/interfaces';

const LogoIcon: FC<IconDefaultProps> = ({ size, height, title }) => (
  <svg
    role="img"
    viewBox="0 0 419 81"
    width={size}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fillRule="evenodd"
    clipRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit="2"
  >
    <title>{title}</title>
    <path
      d="M135.264 226.427V77.437h9.236v148.99h-9.236zm6.791-61.038v-25.644h24.039v25.644h-24.039zm0-62.52V77.437h25.194v25.432h-25.194zM186.195 228.546c-2.988 0-5.681-2.331-8.081-6.994-2.399-4.662-4.278-11.02-5.636-19.074-1.358-8.054-2.037-17.096-2.037-27.128 0-10.172.679-19.286 2.037-27.339 1.358-8.054 3.237-14.412 5.636-19.074 2.4-4.663 5.093-6.994 8.081-6.994 2.355 0 4.46 1.483 6.316 4.451 1.856 2.967 3.339 7.099 4.448 12.398 1.109 5.298 1.709 11.268 1.8 17.908v36.877c-.091 6.782-.691 12.786-1.8 18.014s-2.592 9.361-4.448 12.398c-1.856 3.038-3.961 4.557-6.316 4.557zm1.63-25.644c2.49 0 4.505-2.579 6.044-7.736 1.539-5.157 2.309-11.833 2.309-20.028 0-5.369-.351-10.137-1.053-14.305-.701-4.168-1.675-7.418-2.92-9.749-1.245-2.331-2.705-3.497-4.38-3.497-1.63 0-3.067 1.166-4.312 3.497s-2.218 5.581-2.92 9.749-1.053 8.936-1.053 14.305c0 5.511.351 10.35 1.053 14.518.702 4.168 1.675 7.418 2.92 9.749 1.245 2.331 2.682 3.497 4.312 3.497zm7.878 23.525v-27.552l1.426-25.008-1.426-24.585v-25.22h8.828v102.365h-8.828zM223.681 228.758c-1.856 0-3.678-.777-5.467-2.331-1.788-1.555-3.429-3.709-4.923-6.464-1.494-2.756-2.784-6.111-3.871-10.067l5.297-16.743c1.132 3.956 2.445 6.923 3.939 8.901 1.494 1.978 3.146 2.967 4.957 2.967 1.449 0 2.547-.636 3.294-1.907.747-1.272 1.12-3.179 1.12-5.722 0-2.826-.396-5.016-1.188-6.57-.793-1.555-1.823-2.862-3.09-3.921a72.025 72.025 0 0 1-3.973-3.603c-1.381-1.342-2.705-3.108-3.972-5.298-1.268-2.19-2.298-5.228-3.09-9.114-.793-3.885-1.189-8.936-1.189-15.153 0-6.499.51-12.151 1.528-16.955 1.019-4.804 2.479-8.548 4.38-11.232 1.902-2.685 4.143-4.027 6.723-4.027 2.717 0 5.173 1.484 7.368 4.451 2.196 2.967 4.018 7.417 5.467 13.352l-5.365 16.742c-.996-3.814-2.116-6.57-3.361-8.265-1.245-1.696-2.592-2.543-4.041-2.543-1.313 0-2.32.636-3.022 1.907-.701 1.272-1.052 3.038-1.052 5.298 0 2.544.396 4.522 1.188 5.935a13.222 13.222 0 0 0 3.09 3.708 72.025 72.025 0 0 1 3.973 3.603c1.38 1.343 2.693 3.215 3.938 5.617s2.264 5.581 3.056 9.537c.792 3.956 1.189 9.042 1.189 15.259 0 10.032-1.155 17.979-3.464 23.843-2.309 5.863-5.455 8.795-9.439 8.795zM264.63 226.427v-58.706c0-6.076-.611-11.021-1.834-14.836-1.222-3.814-2.807-5.722-4.753-5.722-1.268 0-2.4.848-3.396 2.543-.996 1.696-1.777 4.098-2.343 7.206-.566 3.108-.848 6.711-.848 10.809l-3.464-5.511c0-8.053.543-15.082 1.63-21.087 1.087-6.005 2.592-10.703 4.516-14.094s4.131-5.086 6.621-5.086 4.697 1.695 6.621 5.086c1.924 3.391 3.429 8.054 4.516 13.988 1.087 5.934 1.63 12.787 1.63 20.558v64.852h-8.896zm-22.07 0V73.198h8.896v153.229h-8.896zM280.724 226.427V124.062h8.964v102.365h-8.964zm4.482-118.896c-1.449 0-2.648-1.519-3.599-4.556-.951-3.038-1.426-6.817-1.426-11.339 0-4.38.475-8.124 1.426-11.232.951-3.109 2.15-4.663 3.599-4.663 1.494 0 2.705 1.554 3.633 4.663.928 3.108 1.392 6.852 1.392 11.232 0 4.522-.464 8.301-1.392 11.339-.928 3.037-2.139 4.556-3.633 4.556zM312.981 228.546c-3.305 0-6.282-2.367-8.93-7.1-2.649-4.733-4.754-11.162-6.316-19.286-1.562-8.124-2.343-17.202-2.343-27.233 0-10.032.77-19.039 2.309-27.022 1.54-7.983 3.645-14.341 6.316-19.074 2.671-4.733 5.636-7.1 8.896-7.1 3.35 0 6.349 2.367 8.998 7.1 2.648 4.733 4.742 11.091 6.281 19.074 1.539 7.983 2.309 16.99 2.309 27.022 0 10.031-.77 19.109-2.309 27.233-1.539 8.124-3.633 14.553-6.281 19.286-2.649 4.733-5.625 7.1-8.93 7.1zm-.068-25.856c1.675 0 3.158-1.166 4.448-3.497 1.29-2.331 2.286-5.581 2.988-9.749.701-4.168 1.052-8.937 1.052-14.306s-.362-10.102-1.086-14.199c-.725-4.098-1.721-7.312-2.988-9.643-1.268-2.331-2.739-3.497-4.414-3.497-1.63 0-3.079 1.166-4.346 3.497-1.268 2.331-2.264 5.545-2.988 9.643-.725 4.097-1.087 8.83-1.087 14.199s.362 10.138 1.087 14.306c.724 4.168 1.72 7.418 2.988 9.749 1.267 2.331 2.716 3.497 4.346 3.497zM358.276 226.427v-58.706c0-6.076-.611-11.021-1.834-14.836-1.222-3.814-2.807-5.722-4.753-5.722-1.268 0-2.4.848-3.396 2.543-.996 1.696-1.777 4.098-2.343 7.206-.566 3.108-.849 6.711-.849 10.809l-3.463-5.511c0-8.053.555-15.082 1.664-21.087 1.109-6.005 2.648-10.703 4.618-14.094 1.969-3.391 4.199-5.086 6.689-5.086 2.399 0 4.55 1.872 6.451 5.616 1.901 3.744 3.395 8.619 4.482 14.624 1.086 6.004 1.63 12.468 1.63 19.392v64.852h-8.896zm-22.071 0V124.062h8.896v102.365h-8.896zM388.563 226.427V77.437h9.235v148.99h-9.235zm6.791-61.038v-25.644h24.039v25.644h-24.039zm0-62.52V77.437h25.194v25.432h-25.194zM440.852 228.546c-2.897 0-5.466-1.907-7.707-5.722-2.241-3.815-3.995-9.113-5.263-15.895-1.268-6.782-1.901-14.624-1.901-23.525v-59.342h8.963v58.706c0 4.239.227 7.877.68 10.915.452 3.037 1.131 5.333 2.037 6.888.905 1.554 1.969 2.331 3.191 2.331 1.857 0 3.305-1.766 4.347-5.298 1.041-3.533 1.562-8.478 1.562-14.836v-58.706h8.896v59.342c0 9.042-.623 16.955-1.868 23.737-1.245 6.781-2.988 12.045-5.229 15.789-2.241 3.744-4.81 5.616-7.708 5.616zM473.992 228.758c-1.856 0-3.679-.777-5.467-2.331-1.788-1.555-3.429-3.709-4.923-6.464-1.494-2.756-2.784-6.111-3.871-10.067l5.297-16.743c1.132 3.956 2.445 6.923 3.939 8.901 1.494 1.978 3.146 2.967 4.957 2.967 1.449 0 2.547-.636 3.294-1.907.747-1.272 1.12-3.179 1.12-5.722 0-2.826-.396-5.016-1.188-6.57-.793-1.555-1.823-2.862-3.09-3.921a72.025 72.025 0 0 1-3.973-3.603c-1.381-1.342-2.705-3.108-3.973-5.298-1.267-2.19-2.297-5.228-3.089-9.114-.793-3.885-1.189-8.936-1.189-15.153 0-6.499.51-12.151 1.528-16.955 1.019-4.804 2.479-8.548 4.38-11.232 1.902-2.685 4.143-4.027 6.723-4.027 2.717 0 5.173 1.484 7.368 4.451 2.196 2.967 4.018 7.417 5.467 13.352l-5.365 16.742c-.996-3.814-2.116-6.57-3.361-8.265-1.245-1.696-2.592-2.543-4.041-2.543-1.313 0-2.32.636-3.022 1.907-.702 1.272-1.052 3.038-1.052 5.298 0 2.544.396 4.522 1.188 5.935a13.222 13.222 0 0 0 3.09 3.708 72.39 72.39 0 0 1 3.973 3.603c1.38 1.343 2.693 3.215 3.938 5.617s2.264 5.581 3.056 9.537c.792 3.956 1.188 9.042 1.188 15.259 0 10.032-1.154 17.979-3.463 23.843-2.309 5.863-5.455 8.795-9.439 8.795zM492.87 226.427V124.062h8.964v102.365h-8.964zm4.482-118.896c-1.448 0-2.648-1.519-3.599-4.556-.95-3.038-1.426-6.817-1.426-11.339 0-4.38.476-8.124 1.426-11.232.951-3.109 2.151-4.663 3.599-4.663 1.494 0 2.705 1.554 3.634 4.663.928 3.108 1.392 6.852 1.392 11.232 0 4.522-.464 8.301-1.392 11.339-.929 3.037-2.14 4.556-3.634 4.556zM525.127 228.546c-3.305 0-6.282-2.367-8.93-7.1-2.648-4.733-4.754-11.162-6.315-19.286-1.562-8.124-2.343-17.202-2.343-27.233 0-10.032.769-19.039 2.309-27.022 1.539-7.983 3.644-14.341 6.315-19.074 2.671-4.733 5.636-7.1 8.896-7.1 3.35 0 6.35 2.367 8.998 7.1 2.648 4.733 4.742 11.091 6.282 19.074 1.539 7.983 2.308 16.99 2.308 27.022 0 10.031-.769 19.109-2.308 27.233-1.54 8.124-3.634 14.553-6.282 19.286-2.648 4.733-5.625 7.1-8.93 7.1zm-.068-25.856c1.675 0 3.158-1.166 4.448-3.497 1.29-2.331 2.286-5.581 2.988-9.749s1.053-8.937 1.053-14.306-.363-10.102-1.087-14.199c-.724-4.098-1.72-7.312-2.988-9.643-1.267-2.331-2.739-3.497-4.414-3.497-1.63 0-3.078 1.166-4.346 3.497-1.268 2.331-2.264 5.545-2.988 9.643-.724 4.097-1.087 8.83-1.087 14.199s.363 10.138 1.087 14.306c.724 4.168 1.72 7.418 2.988 9.749 1.268 2.331 2.716 3.497 4.346 3.497zM570.422 226.427v-58.706c0-6.076-.611-11.021-1.834-14.836-1.222-3.814-2.806-5.722-4.753-5.722-1.268 0-2.4.848-3.396 2.543-.996 1.696-1.776 4.098-2.342 7.206-.566 3.108-.849 6.711-.849 10.809l-3.464-5.511c0-8.053.555-15.082 1.664-21.087 1.109-6.005 2.649-10.703 4.618-14.094 1.969-3.391 4.199-5.086 6.689-5.086 2.399 0 4.55 1.872 6.451 5.616 1.902 3.744 3.396 8.619 4.482 14.624 1.087 6.004 1.63 12.468 1.63 19.392v64.852h-8.896zm-22.07 0V124.062h8.896v102.365h-8.896z"
      fillRule="nonzero"
      transform="matrix(.94244 0 0 .30198 -127.478 -22.104)"
    />
    <g>
      <path
        d="m135.668 167.198-4.639-75.505h1.921l3.679 61.579h-.552l3.618-61.579h1.39l3.618 61.579h-.532l3.679-61.579h1.901l-4.619 75.505h-1.37l-3.638-61.47h.532l-3.618 61.47h-1.37zM158.642 167.198v-30.136c0-3.917-.231-7.145-.695-9.683-.463-2.539-1.063-3.808-1.798-3.808-.491 0-.927.58-1.309 1.741-.381 1.16-.681 2.756-.899 4.787-.218 2.031-.327 4.352-.327 6.963l-.756-2.285c0-3.917.163-7.398.49-10.444.327-3.047.784-5.458 1.37-7.235.586-1.777 1.247-2.666 1.982-2.666.736 0 1.387.87 1.952 2.611.566 1.741 1.012 4.171 1.339 7.29.327 3.118.491 6.709.491 10.77v32.095h-1.84zm-6.867 0v-77.68h1.839v77.68h-1.839zM167.472 168.286c-.967 0-1.84-1.178-2.616-3.535-.777-2.358-1.39-5.567-1.84-9.629-.449-4.062-.674-8.667-.674-13.817 0-5.077.221-9.647.664-13.709.443-4.061 1.042-7.271 1.799-9.628.756-2.357 1.604-3.536 2.544-3.536.9 0 1.693 1.088 2.382 3.264.688 2.176 1.226 5.186 1.614 9.03.389 3.844.583 8.196.583 13.056a139.898 139.898 0 0 1-.102 5.222h-8.197v-8.16h7.215l-.674 3.155c0-3.481-.116-6.437-.347-8.867-.232-2.429-.559-4.315-.982-5.657-.422-1.342-.933-2.013-1.533-2.013-.626 0-1.178.725-1.655 2.176-.477 1.451-.845 3.482-1.104 6.093-.259 2.611-.388 5.693-.388 9.247 0 3.627.136 6.8.409 9.52.272 2.72.66 4.823 1.165 6.31.504 1.487 1.083 2.231 1.737 2.231.545 0 1.046-.508 1.502-1.523.457-1.016.849-2.539 1.176-4.57l1.185 6.419c-.463 2.901-1.032 5.114-1.707 6.637-.674 1.523-1.393 2.284-2.156 2.284zM173.931 167.198V115.52h1.839v51.678h-1.839zm1.839-29.483-.695-1.632c0-6.601.287-11.859.859-15.776.572-3.917 1.397-5.875 2.473-5.875.491 0 .933.453 1.329 1.36.395.907.763 2.412 1.103 4.515l-1.206 6.637c-.204-1.161-.429-1.995-.674-2.503-.245-.507-.532-.761-.859-.761-.681 0-1.24 1.16-1.676 3.481-.436 2.321-.654 5.839-.654 10.554zM186.317 168.286c-.967 0-1.839-1.178-2.616-3.535-.777-2.358-1.39-5.567-1.84-9.629-.449-4.062-.674-8.667-.674-13.817 0-5.077.221-9.647.664-13.709.443-4.061 1.042-7.271 1.799-9.628.756-2.357 1.604-3.536 2.544-3.536.9 0 1.693 1.088 2.382 3.264.688 2.176 1.226 5.186 1.614 9.03.389 3.844.583 8.196.583 13.056a139.898 139.898 0 0 1-.102 5.222h-8.197v-8.16h7.216l-.675 3.155c0-3.481-.116-6.437-.347-8.867-.232-2.429-.559-4.315-.982-5.657-.422-1.342-.933-2.013-1.532-2.013-.627 0-1.179.725-1.656 2.176-.477 1.451-.845 3.482-1.104 6.093-.259 2.611-.388 5.693-.388 9.247 0 3.627.136 6.8.409 9.52.272 2.72.661 4.823 1.165 6.31.504 1.487 1.083 2.231 1.737 2.231.545 0 1.046-.508 1.502-1.523.457-1.016.849-2.539 1.176-4.57l1.185 6.419c-.463 2.901-1.032 5.114-1.707 6.637-.674 1.523-1.393 2.284-2.156 2.284zM201.299 168.286c-1.117 0-2.071-1.088-2.861-3.263-.791-2.176-1.492-5.331-2.106-9.466l1.308-6.963c.45 3.337.968 5.857 1.554 7.562.586 1.704 1.308 2.556 2.166 2.556.845 0 1.523-.979 2.034-2.937.511-1.959.767-4.642.767-8.051 0-2.829-.123-5.114-.368-6.854-.246-1.741-.576-3.174-.992-4.298a23.433 23.433 0 0 0-1.359-3.046 55.397 55.397 0 0 1-1.471-2.938c-.491-1.051-.941-2.357-1.349-3.916-.409-1.56-.74-3.609-.992-6.147-.252-2.539-.378-5.73-.378-9.575 0-4.279.194-7.924.583-10.934.388-3.01.919-5.331 1.594-6.963.674-1.632 1.434-2.448 2.279-2.448.926 0 1.758.962 2.493 2.884.736 1.922 1.336 4.442 1.799 7.561l-1.308 6.963c-.422-2.611-.875-4.569-1.359-5.875s-1.039-1.958-1.666-1.958c-.763 0-1.369.888-1.819 2.665-.45 1.777-.675 4.261-.675 7.453 0 2.538.126 4.587.379 6.147.252 1.559.582 2.883.991 3.971a23.236 23.236 0 0 0 1.359 2.992c.497.906.991 1.904 1.482 2.992.49 1.088.94 2.466 1.349 4.134.409 1.668.739 3.826.991 6.473.252 2.648.378 5.966.378 9.955 0 6.673-.432 11.895-1.298 15.667-.865 3.772-2.033 5.657-3.505 5.657zM209.863 167.198V93.869h1.84v73.329h-1.84zm-2.391-42.757v-8.921h6.622v8.921h-6.622zM219.081 167.634l-4.21-52.114h2.044l3.127 40.799h-.654l3.291-40.799h2.044l-4.538 52.114h-1.104zm-2.779 21.215 2.861-31.225 1.022 10.01-1.84 21.215h-2.043zM226.153 89.518h1.84v77.681h-1.84zM235.188 168.286c-.968 0-1.84-1.178-2.617-3.535-.776-2.358-1.39-5.567-1.839-9.629-.45-4.062-.675-8.667-.675-13.817 0-5.077.222-9.647.665-13.709.442-4.061 1.042-7.271 1.798-9.628s1.605-3.536 2.545-3.536c.899 0 1.693 1.088 2.381 3.264.688 2.176 1.226 5.186 1.615 9.03.388 3.844.582 8.196.582 13.056 0 .725-.007 1.505-.02 2.339-.014.834-.041 1.795-.082 2.883h-8.196v-8.16h7.215l-.674 3.155c0-3.481-.116-6.437-.348-8.867-.232-2.429-.559-4.315-.981-5.657-.422-1.342-.933-2.013-1.533-2.013-.627 0-1.179.725-1.656 2.176-.477 1.451-.844 3.482-1.103 6.093-.259 2.611-.389 5.693-.389 9.247 0 3.627.137 6.8.409 9.52.273 2.72.661 4.823 1.165 6.31.504 1.487 1.083 2.231 1.738 2.231.545 0 1.045-.508 1.502-1.523.456-1.016.848-2.539 1.175-4.57l1.186 6.419c-.464 2.901-1.033 5.114-1.707 6.637-.675 1.523-1.393 2.284-2.156 2.284zM246.225 167.198V91.693h1.349l6.009 52.549h-.92l6.009-52.549h1.349v75.505H258.1v-57.553l.45.653-4.742 41.451h-1.349l-4.742-41.451.429-.653v57.553h-1.921zM267.543 168.286c-.967 0-1.84-1.178-2.616-3.535-.777-2.358-1.39-5.567-1.84-9.629-.449-4.062-.674-8.667-.674-13.817 0-5.077.221-9.647.664-13.709.443-4.061 1.042-7.271 1.799-9.628.756-2.357 1.604-3.536 2.544-3.536.9 0 1.693 1.088 2.382 3.264.688 2.176 1.226 5.186 1.614 9.03.389 3.844.583 8.196.583 13.056a139.898 139.898 0 0 1-.102 5.222H263.7v-8.16h7.215l-.674 3.155c0-3.481-.116-6.437-.347-8.867-.232-2.429-.559-4.315-.982-5.657-.422-1.342-.933-2.013-1.533-2.013-.626 0-1.178.725-1.655 2.176-.477 1.451-.845 3.482-1.104 6.093-.259 2.611-.388 5.693-.388 9.247 0 3.627.136 6.8.409 9.52.272 2.72.66 4.823 1.165 6.31.504 1.487 1.083 2.231 1.737 2.231.545 0 1.046-.508 1.502-1.523.457-1.016.849-2.539 1.176-4.57l1.185 6.419c-.463 2.901-1.032 5.114-1.707 6.637-.674 1.523-1.393 2.284-2.156 2.284zM278.498 168.286c-.967 0-1.839-1.178-2.616-3.535-.776-2.358-1.39-5.567-1.839-9.629-.45-4.062-.675-8.667-.675-13.817 0-5.077.222-9.647.664-13.709.443-4.061 1.043-7.271 1.799-9.628s1.605-3.536 2.545-3.536c.899 0 1.693 1.088 2.381 3.264.688 2.176 1.226 5.186 1.615 9.03.388 3.844.582 8.196.582 13.056 0 .725-.007 1.505-.02 2.339-.014.834-.041 1.795-.082 2.883h-8.196v-8.16h7.215l-.675 3.155c0-3.481-.115-6.437-.347-8.867-.232-2.429-.559-4.315-.981-5.657-.423-1.342-.933-2.013-1.533-2.013-.627 0-1.179.725-1.656 2.176-.477 1.451-.844 3.482-1.103 6.093-.259 2.611-.389 5.693-.389 9.247 0 3.627.137 6.8.409 9.52.273 2.72.661 4.823 1.165 6.31.504 1.487 1.083 2.231 1.737 2.231.546 0 1.046-.508 1.503-1.523.456-1.016.848-2.539 1.175-4.57l1.185 6.419c-.463 2.901-1.032 5.114-1.706 6.637-.675 1.523-1.393 2.284-2.157 2.284zM286.163 167.198V93.869h1.84v73.329h-1.84zm-2.391-42.757v-8.921h6.622v8.921h-6.622zM295.075 168.286c-.545 0-1.06-.38-1.543-1.142-.484-.761-.93-1.849-1.339-3.264-.409-1.414-.763-3.101-1.063-5.059l1.185-6.31c.355 2.321.764 4.044 1.227 5.168.463 1.124.981 1.686 1.553 1.686.573 0 1.015-.526 1.329-1.577.313-1.052.47-2.521.47-4.407 0-1.886-.126-3.354-.378-4.406-.252-1.052-.576-1.922-.971-2.611a47.573 47.573 0 0 0-1.257-2.067c-.443-.689-.862-1.578-1.257-2.666-.395-1.088-.719-2.575-.971-4.46-.252-1.886-.378-4.389-.378-7.507 0-3.119.143-5.821.429-8.106.286-2.285.685-4.043 1.196-5.276.511-1.233 1.127-1.85 1.85-1.85.763 0 1.44.707 2.033 2.122.593 1.414 1.08 3.535 1.462 6.364l-1.186 6.31c-.272-1.885-.61-3.336-1.012-4.352-.402-1.015-.855-1.523-1.359-1.523-.531 0-.937.49-1.216 1.469-.279.979-.419 2.339-.419 4.08s.123 3.083.368 4.025c.245.943.569 1.741.971 2.394s.821 1.324 1.257 2.013c.436.689.851 1.614 1.247 2.774.395 1.161.718 2.72.971 4.678.252 1.959.378 4.534.378 7.725 0 4.86-.324 8.704-.971 11.532-.647 2.829-1.516 4.243-2.606 4.243zM310.609 168.286c-1.05 0-1.986-1.251-2.811-3.753-.824-2.502-1.475-5.948-1.952-10.336-.477-4.388-.715-9.374-.715-14.959V91.693h1.921v47.327c0 3.989.157 7.435.47 10.336.314 2.901.74 5.15 1.278 6.745.538 1.596 1.141 2.394 1.809 2.394.695 0 1.304-.798 1.829-2.394.525-1.595.94-3.844 1.247-6.745.306-2.901.46-6.31.46-10.227V91.693h1.941v47.653c0 5.585-.238 10.554-.715 14.906s-1.124 7.779-1.942 10.281c-.817 2.502-1.757 3.753-2.82 3.753zM325.795 167.198v-30.136c0-3.917-.232-7.145-.695-9.683-.463-2.539-1.063-3.808-1.799-3.808-.49 0-.926.58-1.308 1.741-.381 1.16-.681 2.756-.899 4.787-.218 2.031-.327 4.352-.327 6.963l-.756-2.285c0-3.917.163-7.398.49-10.444.327-3.047.784-5.458 1.37-7.235.586-1.777 1.247-2.666 1.982-2.666.736 0 1.387.979 1.952 2.938.566 1.958 1.012 4.515 1.339 7.67.327 3.155.491 6.509.491 10.063v32.095h-1.84zm-6.868 0V115.52h1.84v51.678h-1.84zM330.149 167.198V115.52h1.839v51.678h-1.839zm.919-62.014c-.34 0-.62-.598-.838-1.795-.218-1.197-.327-2.702-.327-4.515 0-1.741.109-3.209.327-4.406.218-1.197.498-1.795.838-1.795.341 0 .62.598.838 1.795.218 1.197.327 2.665.327 4.406 0 1.813-.109 3.318-.327 4.515-.218 1.197-.497 1.795-.838 1.795zM338.856 168.286c-.9 0-1.71-1.178-2.432-3.535-.723-2.358-1.292-5.567-1.707-9.629-.416-4.062-.624-8.631-.624-13.708 0-5.078.208-9.647.624-13.709.415-4.062.984-7.289 1.707-9.683.722-2.393 1.526-3.59 2.411-3.59.75 0 1.414.816 1.993 2.448.579 1.632 1.043 3.88 1.39 6.745.348 2.865.542 6.184.583 9.955v15.558c-.041 3.699-.235 6.999-.583 9.901-.347 2.901-.811 5.168-1.39 6.8-.579 1.631-1.236 2.447-1.972 2.447zm.286-9.247c.913 0 1.649-1.65 2.207-4.951.559-3.3.838-7.525.838-12.674 0-3.554-.126-6.655-.378-9.303-.252-2.647-.606-4.714-1.063-6.201-.456-1.487-.991-2.23-1.604-2.23-.613 0-1.155.761-1.625 2.284-.47 1.524-.841 3.609-1.114 6.256-.272 2.648-.409 5.676-.409 9.085 0 3.481.137 6.546.409 9.193.273 2.648.644 4.733 1.114 6.256.47 1.523 1.012 2.285 1.625 2.285zm2.943 29.81v-34.597l.327-12.621-.327-12.511v-13.6h1.84v73.329h-1.84zM350.547 168.286c-.804 0-1.523-.961-2.156-2.883-.634-1.922-1.128-4.587-1.482-7.996-.354-3.409-.532-7.362-.532-11.859V115.52h1.84v29.593c0 2.828.092 5.276.276 7.344.184 2.067.453 3.644.807 4.732.355 1.088.77 1.632 1.247 1.632.722 0 1.288-1.215 1.697-3.645.408-2.429.613-5.784.613-10.063V115.52h1.839v30.028c0 4.497-.177 8.45-.531 11.859-.354 3.409-.842 6.074-1.462 7.996-.62 1.922-1.338 2.883-2.156 2.883zM361.666 168.286c-.967 0-1.839-1.178-2.616-3.535-.777-2.358-1.39-5.567-1.84-9.629-.449-4.062-.674-8.667-.674-13.817 0-5.077.221-9.647.664-13.709.443-4.061 1.043-7.271 1.799-9.628s1.604-3.536 2.544-3.536c.9 0 1.694 1.088 2.382 3.264.688 2.176 1.226 5.186 1.614 9.03.389 3.844.583 8.196.583 13.056a139.898 139.898 0 0 1-.102 5.222h-8.196v-8.16h7.215l-.675 3.155c0-3.481-.116-6.437-.347-8.867-.232-2.429-.559-4.315-.981-5.657-.423-1.342-.934-2.013-1.533-2.013-.627 0-1.179.725-1.656 2.176-.477 1.451-.845 3.482-1.104 6.093-.259 2.611-.388 5.693-.388 9.247 0 3.627.136 6.8.409 9.52.272 2.72.661 4.823 1.165 6.31.504 1.487 1.083 2.231 1.737 2.231.545 0 1.046-.508 1.502-1.523.457-1.016.849-2.539 1.176-4.57l1.185 6.419c-.463 2.901-1.032 5.114-1.707 6.637-.674 1.523-1.393 2.284-2.156 2.284zM374.993 167.198v-30.136c0-3.917-.232-7.145-.695-9.683-.464-2.539-1.063-3.808-1.799-3.808-.491 0-.927.58-1.308 1.741-.382 1.16-.681 2.756-.899 4.787-.218 2.031-.328 4.352-.328 6.963l-.756-2.285c0-3.917.164-7.398.491-10.444.327-3.047.783-5.458 1.369-7.235.586-1.777 1.247-2.666 1.983-2.666s1.386.979 1.952 2.938c.565 1.958 1.012 4.515 1.339 7.67.327 3.155.49 6.509.49 10.063v32.095h-1.839zm-6.868 0V115.52h1.839v51.678h-1.839zM383.822 168.286c-.967 0-1.839-1.178-2.616-3.535-.777-2.358-1.39-5.567-1.839-9.629-.45-4.062-.675-8.667-.675-13.817 0-5.077.222-9.647.664-13.709.443-4.061 1.043-7.271 1.799-9.628s1.605-3.536 2.545-3.536c.899 0 1.693 1.088 2.381 3.264.688 2.176 1.226 5.186 1.615 9.03.388 3.844.582 8.196.582 13.056 0 .725-.007 1.505-.02 2.339-.014.834-.041 1.795-.082 2.883h-8.196v-8.16h7.215l-.675 3.155c0-3.481-.115-6.437-.347-8.867-.232-2.429-.559-4.315-.981-5.657-.423-1.342-.934-2.013-1.533-2.013-.627 0-1.179.725-1.656 2.176-.477 1.451-.845 3.482-1.103 6.093-.259 2.611-.389 5.693-.389 9.247 0 3.627.136 6.8.409 9.52.273 2.72.661 4.823 1.165 6.31.504 1.487 1.083 2.231 1.737 2.231.545 0 1.046-.508 1.503-1.523.456-1.016.848-2.539 1.175-4.57l1.185 6.419c-.463 2.901-1.032 5.114-1.706 6.637-.675 1.523-1.394 2.284-2.157 2.284zM393.368 168.286c-.546 0-1.06-.38-1.544-1.142-.483-.761-.93-1.849-1.338-3.264-.409-1.414-.763-3.101-1.063-5.059l1.185-6.31c.355 2.321.763 4.044 1.227 5.168.463 1.124.981 1.686 1.553 1.686s1.015-.526 1.329-1.577c.313-1.052.47-2.521.47-4.407 0-1.886-.126-3.354-.378-4.406-.253-1.052-.576-1.922-.971-2.611a49.64 49.64 0 0 0-1.257-2.067c-.443-.689-.862-1.578-1.257-2.666-.396-1.088-.719-2.575-.971-4.46-.252-1.886-.378-4.389-.378-7.507 0-3.119.143-5.821.429-8.106.286-2.285.685-4.043 1.196-5.276.511-1.233 1.127-1.85 1.849-1.85.763 0 1.441.707 2.034 2.122.593 1.414 1.08 3.535 1.461 6.364l-1.185 6.31c-.273-1.885-.61-3.336-1.012-4.352-.402-1.015-.855-1.523-1.359-1.523-.531 0-.937.49-1.216 1.469-.28.979-.419 2.339-.419 4.08s.122 3.083.368 4.025c.245.943.569 1.741.971 2.394s.821 1.324 1.257 2.013c.436.689.851 1.614 1.246 2.774.396 1.161.719 2.72.971 4.678.252 1.959.378 4.534.378 7.725 0 4.86-.323 8.704-.97 11.532-.648 2.829-1.516 4.243-2.606 4.243zM402.095 168.286c-.545 0-1.059-.38-1.543-1.142-.484-.761-.93-1.849-1.339-3.264-.409-1.414-.763-3.101-1.063-5.059l1.186-6.31c.354 2.321.763 4.044 1.226 5.168.463 1.124.981 1.686 1.554 1.686.572 0 1.015-.526 1.328-1.577.314-1.052.47-2.521.47-4.407 0-1.886-.126-3.354-.378-4.406-.252-1.052-.576-1.922-.971-2.611a47.573 47.573 0 0 0-1.257-2.067c-.443-.689-.862-1.578-1.257-2.666-.395-1.088-.719-2.575-.971-4.46-.252-1.886-.378-4.389-.378-7.507 0-3.119.143-5.821.429-8.106.287-2.285.685-4.043 1.196-5.276.511-1.233 1.128-1.85 1.85-1.85.763 0 1.441.707 2.034 2.122.592 1.414 1.079 3.535 1.461 6.364l-1.185 6.31c-.273-1.885-.61-3.336-1.012-4.352-.402-1.015-.855-1.523-1.359-1.523-.532 0-.937.49-1.217 1.469-.279.979-.419 2.339-.419 4.08s.123 3.083.368 4.025c.246.943.569 1.741.971 2.394s.821 1.324 1.257 2.013c.436.689.852 1.614 1.247 2.774.395 1.161.719 2.72.971 4.678.252 1.959.378 4.534.378 7.725 0 4.86-.324 8.704-.971 11.532-.647 2.829-1.516 4.243-2.606 4.243z"
        fillRule="nonzero"
        transform="matrix(.9785 0 0 .18383 21.213 45.808)"
      />
    </g>
  </svg>
);

export default LogoIcon;
