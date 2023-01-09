#!/usr/bin/env sh

##
## Input parameters
##
BINARY=/warmage/${BINARY:-warmaged}
ID=${ID:-0}
LOG=${LOG:-warmaged.log}

##
## Assert linux binary
##
if ! [ -f "${BINARY}" ]; then
	echo "The binary $(basename "${BINARY}") cannot be found. Please add the binary to the shared folder. Please use the BINARY environment variable if the name of the binary is not 'warmaged' E.g.: -e BINARY=warmaged_my_test_version"
	exit 1
fi
BINARY_CHECK="$(file "$BINARY" | grep 'ELF 64-bit LSB executable, x86-64')"
if [ -z "${BINARY_CHECK}" ]; then
	echo "Binary needs to be OS linux, ARCH amd64"
	exit 1
fi

##
## Run binary with all parameters
##
export WARMAGE_HOME="/warmage/node${ID}/warmaged"

if [ -d "$(dirname "${WARMAGE_HOME}"/"${LOG}")" ]; then
  "${BINARY}" --home "${WARMAGE_HOME}" --trace "$@" | tee "${WARMAGE_HOME}/${LOG}"
else
  "${BINARY}" --home "${WARMAGE_HOME}" --trace "$@"
fi
