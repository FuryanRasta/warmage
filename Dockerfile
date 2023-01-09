FROM golang:stretch AS build-env

WORKDIR /go/src/github.com/warmage-sports/warmage

RUN apt update
RUN apt install git -y

COPY . .

RUN make build

FROM golang:stretch

RUN apt update
RUN apt install ca-certificates jq -y

WORKDIR /root

COPY --from=build-env /go/src/github.com/warmage-sports/warmage/build/warmaged /usr/bin/warmaged

EXPOSE 26656 26657 1317 9090

CMD ["warmaged"]