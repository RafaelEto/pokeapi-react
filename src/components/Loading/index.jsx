import { LoadingContainer } from './styles'
import { TailSpin } from 'react-loader-spinner'

export default function Loading() {
    return (
        <>
            <LoadingContainer>
                <TailSpin 
                    height="60"
                    width="60"
                    color='#FAC705'
                    ariaLabel='loading' />
            </LoadingContainer>
        </>
    )
}