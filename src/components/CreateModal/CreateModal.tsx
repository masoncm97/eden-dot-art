import React from 'react' //  { useState, forwardRef }
// , useEffect, useCallback

// MUI
// import {
// Backdrop,
// Box,
// Button,
// Modal,
// Typography,
// Select,
// SelectChangeEvent,
// TextField,
// useTheme,
// styled,
// Snackbar,
// } from '@mui/material'
// import MuiAlert, { AlertProps } from '@mui/material/Alert'

// REDUX
import { useAppSelector } from '@/hooks/hooks'
// useAppDispatch

// WALLET
// import { useAccount, useSigner } from 'wagmi'

// import {
//   setIsRunningTrue,
//   setIsRunningFalse,
//   setIsLoader,
//   setIsCreationRunningTrue,
// } from '../../../redux/slices/creationsSlice'

// UI
// import { message, notification, Form, Progress, Input, Space } from 'antd'
// const { TextArea } = Input

// COMPONENTS
import CreateUI from '@/components/CreateUI/CreateUI'
import CreateSignInJWT from '@/components/CreateSignInJWT/CreateSignInJWT'
// import AppLogo from '@/components/AppLogo'

// import {
//   SignInJWT,
//   Tokens,
//   SimpleBlockie,
//   UploadMediaBar,
//   Logo,
// } from '../../abraham'

// HOOKS
// import useWindowDimensions from '@/hooks/useWindowDimensions'

// ICONS
// import { HiChip } from 'react-icons/hi'
// import { IoMdResize } from 'react-icons/io'
// import AddIcon from '@mui/icons-material/Add'

// const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
//   props,
//   ref,
// ) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
// })

// const CreateButtonStyles = styled('section')(
//   () => `
//   button.ant-btn-circle.ant-btn-lg {
//     font-size: 16px;
//     font-weight: 600;
//     min-width: 50px;
//     min-height: 50px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   button.ant-btn.ant-btn-round.ant-btn-lg {
//     font-size: 16px;
//     font-weight: 600;
//     min-width: 50px;
//     min-height: 50px;
//     display: flex;
//     align-items: center;
//   }
//   button.ant-btn > span {
//     font-size: 16px;
//     font-weight: 600;
//   }
//   #create-button-large .create-button-text {
//     padding-left: 10px;
//   }
//   .token-wrapper .ant-badge {
//     margin: 0 15px 0 0;
//   }
//   @media only screen and (max-width: 718px) {
//     /* order: 2;
//     margin: 0 8px; */
//   }
// `,
// )

// const ModalStyles = styled('section')(
//   () => `
//   padding: 20px;
//   .ant-form-horizontal .ant-form-item-control {
//     max-width: unset;
//   }
//   .ant-progress-circle .ant-progress-inner {
//     margin-right: 18px;
//   }
//   ::placeholder {
//     color: #536471 !important;
//     opacity: 1;
//   }

//   /* CREATE MODAL */
//   .create-modal .ant-modal-content {
//     width: 100%;
//     border-radius: 30px;
//     overflow: hidden;
//     padding: 40px 0 0 0;
//   }
//   #create-form {
//     width: 100%;
//     border: none;
//     padding: 0 0 0 20px;
//   }
//   .create-modal .form-wrapper {
//     display: flex;
//     flex-direction: row;
//     flex: 1;
//     width: 100%;
//   }
//   .create-modal .form-inner-wrapper {
//     display: flex;
//     flex-direction: column;
//     flex: 1;
//     width: 100%;
//   }
//   .create-modal button.ant-modal-close {
//     right: unset;
//     left: 0;
//   }
//   #create-form_prompt {
//     font-size: 1.5em;
//     border: none;
//     box-shadow: none;
//     width: 100%;
//     padding: 20px 0 0 0;
//   }

//   /* SELECTOR */
//   #create-form
//     .ant-select-single.ant-select-show-arrow
//     .ant-select-selection-placeholder {
//     color: rgb(24, 144, 255);
//     font-weight: 600;
//   }
//   #create-form .ant-select-selector {
//     border-radius: 30px;
//   }

//   /* FOOTER */
//   .create-modal .ant-modal-footer {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   .create-modal.sign-in .ant-modal-footer {
//     justify-content: center;
//     align-items: center;
//   }
//   .create-modal .ant-modal-footer {
//     justify-content: flex-end;
//     flex: 1;
//   }
//   .create-modal .footer-wrapper {
//     display: flex;
//     align-items: center;
//     flex: 1;
//   }
//   .create-modal .footer-wrapper.sign-in {
//     justify-content: center;
//   }
//   .create-modal .footer-wrapper.create-button {
//     justify-content: flex-end;
//   }

//   /* BUTTONS */
//   .create-modal button.sign-in-button,
//   .create-modal button.create-button {
//     width: 100px;
//     height: 50px;
//     display: flex;
//     /* border-radius: 50% !important; */
//     margin: 0;
//     padding: 0;
//     align-items: center;
//     justify-content: center;
//     border-width: 1px;
//     font-weight: 600;
//   }
//   .create-modal button.create-button span {
//     font-weight: 600;
//   }

//   /* TEXT-AREA */
//   .create-modal .ant-form-item textarea.ant-input.create-text-area {
//     width: 100%;
//     border: none;
//     height: 150px;
//   }
//   .create-modal .ant-form-item-control {
//     width: 100%;
//     max-width: unset;
//   }

//   /* SIGN-IN WRAPPER */
//   .sign-in-wrapper {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     width: 100%;
//   }
//   .sign-in-wrapper .header {
//     display: flex;
//     justify-content: center;
//   }
//   .sign-in-wrapper .header h3 {
//     font-size: 24px;
//     font-weight: 600;
//   }
//   .sign-in-wrapper .logo-wrapper {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   .sign-in-wrapper .logo-wrapper #logo {
//     width: unset;
//     height: 200px;
//   }
//   .sign-in-wrapper .message {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     padding: 30px 0;
//   }
//   .sign-in-wrapper .message p {
//     font-size: 18px;
//   }
//   .sign-in-wrapper .footer {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
// `,
// )

// const axios = require('axios')
// const serverUrl = window?.appConfig?.ABRAHAM_GATEWAY

export default function CreateModal({ isOpen = true, onClose }) {
  // const [open, setOpen] = useState(isOpen)

  // REDUX STATE
  // const dispatch = useDispatch()
  const { isWeb3AuthSuccess } = useAppSelector(state => state.auth)
  // const {
  //   // address,
  //   isConnected,
  // } = useAccount()

  // console.log({ isOpen })
  // console.log({ isWeb3AuthSuccess })

  // const address = useSelector(state => state.address.value)
  // const token = useSelector(state => state.token.value)
  // const tokenAmount = useSelector(state => state.token.amount)

  // const [visibleT, setVisibleT] = useState(false)

  // const { width } = useWindowDimensions()

  // const layout = {
  //   labelCol: {
  //     span: 8,
  //   },
  //   wrapperCol: {
  //     span: 16,
  //   },
  // }

  // const validateMessages = {
  //   required: '${label} is required!',
  //   types: {
  //     email: '${label} is not a valid email!',
  //     number: '${label} is not a valid number!',
  //   },
  //   number: {
  //     range: '${label} must be between ${min} and ${max}',
  //   },
  // }

  // const onReset = () => {
  //   form.resetFields()
  // }

  // const onSubmit = useCallback(
  //   async (
  //     values,
  //     address,
  //     token,
  //     prompt,
  //     creationWidth,
  //     creationHeight,
  //     creationShape,
  //   ) => {
  //     // let text_input = values.textInput;
  //     console.log('VALUES')
  //     console.log({ values })
  //     console.log(creationWidth, creationHeight)
  //     const generator_name = 'eden-clipx'

  //     let text_input = prompt
  //     console.log('TEXT-INPUT: ' + text_input)

  //     const results = await axios // address is parsed from the JWT token
  //       .post(serverUrl + '/request_creation', {
  //         token: token,
  //         source: 'abraham',
  //         generator_name: generator_name,
  //         config: {
  //           text_input: text_input,
  //           width: creationWidth,
  //           height: creationHeight,
  //         },
  //       })
  //       .then(response => {
  //         //console.log(response)
  //         dispatch(setIsCreationRunningTrue())
  //         sendNotification('success', {
  //           message: 'Request Submitted.',
  //           description: `Abraham will dream a ${creationShape} creation: ${text_input}`,
  //         })
  //       })
  //       .catch(error => {
  //         console.log(error)
  //         console.log(error.response)
  //         onReset()
  //         setPrompt('')
  //         sendNotification('error', {
  //           message: 'Failed to Submit Request!',
  //           description: `${error.response.data}`,
  //         })
  //       })
  //   },
  //   [],
  // )

  // const onSubmit = () => null

  // const handleDimension = () => null

  // function handleDimension(selectObj) {
  //   console.log(selectObj)
  //   console.log(selectObj.value)

  //   switch (selectObj.value) {
  //     case 'landscape':
  //       console.log('landscape')
  //       setCreationShape('landscape')
  //       setCreationHeight(720)
  //       setCreationWidth(1280)
  //       break
  //     case 'vertical':
  //       console.log('vertical')
  //       setCreationShape('vertical')
  //       setCreationHeight(1280)
  //       setCreationWidth(720)
  //       break
  //     case 'square':
  //       console.log('square')
  //       setCreationShape('square')
  //       setCreationHeight(1280)
  //       setCreationWidth(1280)
  //       break
  //     default:
  //       setCreationHeight(1280)
  //       setCreationWidth(1280)
  //   }
  // }

  // function onFormSubmit() {
  //   // handles redux and other form submission functionality
  //   form.submit
  //   setPrompt('')
  //   dispatch(setIsLoader(true))
  //   onReset()
  //   closePopup()
  // }

  // const showModal = () => {
  //   setVisibleT(true)
  // }

  // const handleSnackbarClick = () => {
  //   setOpen(true)
  // }

  // const handleSnackbarClose = (
  //   event?: React.SyntheticEvent | Event,
  //   reason?: string,
  // ) => {
  //   if (reason === 'clickaway') {
  //     return event ? event : null
  //   }

  //   setOpen(false)
  // }

  // const sendNotification = (type, data) => {
  //   // return notification[type]({
  //   //   ...data,
  //   //   placement: 'bottomRight',
  //   // })
  //   return (
  //     <Snackbar
  //       open={open}
  //       autoHideDuration={6000}
  //       onClose={handleSnackbarClose}
  //     >
  //       <Alert
  //         onClose={handleSnackbarClose}
  //         severity="success"
  //         sx={{ width: '100%' }}
  //       >
  //         {data}
  //       </Alert>
  //     </Snackbar>
  //   )
  // }

  // const goToDiscord = () => {
  //   window.location = 'https://discord.gg/4dSYwDT'
  // }

  // const closePopup = useCallback(() => {
  //   form.resetFields()
  //   setVisibleT(false)
  // }, [form])

  // const smallButtonType = token === '' ? 'primary' : 'default'

  // console.log({ address });
  // console.log('token:' + token)

  // const smallButton = (
  //   <Button
  //     id="create-button-small"
  //     type={'default'}
  //     key="small-button"
  //     shape={width < 959 ? 'circle' : 'round'}
  //     size="large"
  //     block={width < 959 ? false : true}
  //     onClick={showModal}
  //     disabled={isDisabled}
  //     style={{ fontWeight: 600 }}
  //   >
  //     {width < 959 ? <AddIcon /> : null}
  //     {width > 959 ? <span className="create-button-text">Create</span> : null}
  //   </Button>
  // )

  // const largeButton = (
  //   <CreateButtonStyles>
  //     <Button
  //       id="create-button-large"
  //       type="default"
  //       shape={'round'}
  //       key="large-button"
  //       size="large"
  //       block={width < 959 ? false : true}
  //       onClick={showModal}
  //       disabled={isDisabled}
  //     >
  //       {width < 959 ? <AddIcon /> : null}
  //       <span className="create-button-text" style={{ fontWeight: 600 }}>
  //         Create
  //       </span>
  //     </Button>
  //   </CreateButtonStyles>
  // )

  // const footer = isWeb3AuthSuccess ? (
  //   <div className="footer-wrapper create-button" key="footer-wrapper">
  //     <Progress
  //       type="circle"
  //       strokeColor={{
  //         '0%': '#108ee9',
  //         '100%': '#87d068',
  //       }}
  //       key="progress"
  //       style={{ marginRight: 30 }}
  //       width={20}
  //       showInfo={false}
  //       strokeWidth={10}
  //       percent={maxCharPercent}
  //     />
  //     <Button
  //       key="submit"
  //       type="primary"
  //       shape="round"
  //       className="create-button"
  //       size="large"
  //       onClick={form.submit}
  //       loading={confirmLoading}
  //       disabled={isWeb3AuthSuccess ? false : true}
  //       // onClick={tokens.length == 0 && isSigner ? requestTokens : form.submit}
  //     >
  //       {tokenAmount == 0 && isWeb3AuthSuccess
  //         ? 'How can I get tokens?'
  //         : 'Create'}
  //     </Button>
  //   </div>
  // ) : (
  //   <div className="footer-wrapper sign-in" key="footer-wrapper">
  //     <Button
  //       key="cancel-button "
  //       className="sign-in-button"
  //       type="round"
  //       size="large"
  //       onClick={closePopup}
  //     >
  //       Cancel
  //     </Button>
  //     <SignInJWT
  //       userSigner={userSigner}
  //       web3Modal={web3Modal}
  //       logoutOfWeb3Modal={logoutOfWeb3Modal}
  //     />
  //   </div>
  // )

  // onClose={onClose}
  return isWeb3AuthSuccess ? (
    <CreateUI isOpen={isOpen} />
  ) : (
    <CreateSignInJWT isOpen={isOpen} onClose={onClose} />
  )
}
