---
title:  "Configuring NFS Client"
excerpt: "소주제"

toc: false
toc_label: "페이지 주요 목차"

categories:
- 델피콤
tags:
- 개발팀
last_modified_at: 2019-08-21
---

## Configuring NFS Client  
mount 명령은 클라이언트 측에서 NFS 공유를 마운트합니다. 형식은 다음과 같습니다.  

    # mount -t nfs -o options server:/remote/export /local/directory

이 명령은 다음 변수를 사용합니다.  
**options**  
쉼표로 구분 된 마운트 옵션 목록  
**server**  
마운트 할 파일 시스템을 내보내는 서버의 호스트 이름, IP 주소 또는 정규화 된 도메인 이름  
**/remote/export**  
서버에서 내보내는 파일 시스템 또는 디렉토리, 즉 마운트하려는 디렉토리  
**/local/directory**  
/remote/export가 마운트 된 클라이언트 위치

Red Hat Enterprise Linux 7에서 사용되는 NFS 프로토콜 버전은 nfsvers 또는 vers 마운트 옵션으로 식별됩니다. 기본적으로 mount는 mount -t nfs와 함께 NFSv4를 사용합니다. 서버가 NFSv4를 지원하지 않으면 클라이언트는 자동으로 서버가 지원하는 버전으로 단계적으로 내려갑니다. nfsvers/vers 옵션을 사용하여 서버가 지원하지 않는 특정 버전을 전달하면 마운트가 실패합니다. 파일 시스템 유형 nfs4는 레거시 이유로도 사용할 수 있습니다. 이것은 mount -t nfs -o nfsvers = 4 host:/remote/export/local/ 디렉토리를 실행하는 것과 같습니다.

NFS 공유가 수동으로 마운트 된 경우 재부트시 공유가 자동으로 마운트되지 않습니다. Red Hat Enterprise Linux는 부트시 원격 파일 시스템을 자동으로 마운트하는 두 가지 방법 인 /etc/fstab 파일과 autofs 서비스를 제공합니다.

