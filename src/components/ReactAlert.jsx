import React from 'react'
import Alert from '@mui/material/Alert'
import { motion } from 'framer-motion'

export default function ReactAlert({ msg, msgSeverity, msgColor }) {


    return (

        <motion.div
            initial={{ top: -100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ top: -100, opacity: 0 }}
        >
            <Alert className="transitioned-alert" severity={msgSeverity || 'info'} color={msgColor || 'warning'}> {msg} </Alert>
        </motion.div>

    )

}
