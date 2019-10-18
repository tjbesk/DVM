import { State } from 'src/interpreter/State';

export const useMemoryMstore = (state: State) => {
    let [offset, word] = state.stack.peekN(2);
    state.memory.resize(Number(offset) + 32);
};

export const useMemoryMstore8 = (state: State) => {
    let [offset, byte] = state.stack.peekN(2);
    state.memory.resize(Number(offset) + 1);
};

export const useMemoryCodeCopy = (state: State) => {
    const [memOffset, codeOffset, length] = state.stack.peekN(3);
    state.memory.resize(Number(memOffset + length));
};

export const useMemoryCallDataCopy = (state: State) => {
    const [memOffset, codeOffset, length] = state.stack.peekN(3);
    state.memory.resize(Number(memOffset + length));
};

export const useMemoryCall = (state: State) => {
    const [
        gasLimit,
        toAddress,
        value,
        inOffset,
        inLength,
        outOffset,
        outLength,
    ] = state.stack.peekN(7);

    // TODO
    state.memory.resize(Number(outOffset + outLength));
};

export const useMemoryExtCodeCopy = (state: State) => {
    let [address, memOffset, codeOffset, length] = state.stack.peekN(4);
    state.memory.resize(Number(memOffset + length));
};

export const useMemoryDelegateCall = (state: State) => {
    let [gasLimit, toAddress, inOffset, inLength, outOffset, outLength] = state.stack.peekN(6);
    // TODO
    state.memory.resize(Number(outOffset + outLength));
};
