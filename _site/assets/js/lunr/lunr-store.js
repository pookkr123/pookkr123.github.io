var store = [{
        "title": "Required Services",
        "excerpt":"Required Services Red Hat Enterprise Linux는 커널 레벨 지원과 데몬 프로세스의 조합을 사용하여 NFS 파일 공유를 제공합니다. 모든 NFS 버전은 클라이언트와 서버 간의 원격 프로 시저 호출 (RPC)에 의존합니다. Red Hat Enterprise Linux 7에서 RPC 서비스는 rpcbind 서비스에 의해 제어됩니다. NFS 파일 시스템을 공유하거나 마운트하려면 구현 된 NFS 버전에 따라...","categories": ["델피콤"],
        "tags": ["개발팀"],
        "url": "http://localhost:4000/%EB%8D%B8%ED%94%BC%EC%BD%A4/first-post/",
        "teaser":"http://localhost:4000/assets/images/delphicomLogo.png"},{
        "title": "pNFS",
        "excerpt":"pNFS Red Hat Enterprise Linux 6.4에서는 NFS v4.1 표준의 일부로 Parallel NFS (pNFS)를 지원합니다. pNFS 아키텍처는 성능 향상을 통해 NFS의 확장 성을 향상시킵니다. 즉, 서버가 pNFS를 구현할 때 클라이언트는 동시에 여러 서버를 통해 데이터에 액세스 할 수 있습니다. 파일, 객체 및 블록과 같은 세 가지 저장소 프로토콜 또는 레이아웃을 지원합니다....","categories": ["두산"],
        "tags": ["서비스팀"],
        "url": "http://localhost:4000/%EB%91%90%EC%82%B0/two-post/",
        "teaser":"http://localhost:4000/assets/images/delphicomLogo.png"},{
        "title": "Common NFS Mount Options",
        "excerpt":"Common NFS Mount Options NFS를 사용하는 파일 시스템을 원격 호스트에 마운트하는 것 외에도 마운트 된 공유를보다 쉽게 ​​사용할 수 있도록 마운트시 다른 옵션을 지정할 수도 있습니다. 이 옵션은 수동 마운트 명령, /etc/fstab 설정 및 autofs와 함께 사용할 수 있습니다 다음은 NFS 마운트에 일반적으로 사용되는 옵션입니다. intr 서버가 다운되거나 도달 할...","categories": ["델피콤"],
        "tags": ["개발팀"],
        "url": "http://localhost:4000/%EB%8D%B8%ED%94%BC%EC%BD%A4/five-post/",
        "teaser":"http://localhost:4000/assets/images/delphicomLogo.png"},{
        "title": "Mounting NFS File Systems Using /etc/fstab",
        "excerpt":"Mounting NFS File Systems Using /etc/fstab NFS 공유를 다른 시스템에서 마운트하는 다른 방법은 /etc/fstab 파일에 한 줄을 추가하는 것입니다. 이 줄에는 NFS 서버의 호스트 이름, 내보낼 서버의 디렉토리 및 NFS 공유가 마운트 될 로컬 시스템의 디렉토리가 나와 있어야합니다. /etc/fstab 파일을 수정하려면 루트이어야합니다. /etc/fstab에있는 일반 구문은 다음과 같습니다. server:/usr/local/pub /pub nfs...","categories": ["두산"],
        "tags": ["서비스팀"],
        "url": "http://localhost:4000/%EB%91%90%EC%82%B0/four-post/",
        "teaser":"http://localhost:4000/assets/images/delphicomLogo.png"},{
        "title": "Configuring the NFS Server",
        "excerpt":"Configuring the NFS Server NFS 서버에서 내보내기를 구성하는 방법에는 두 가지가 있습니다. NFS 구성 파일, 즉 /etc/exports 를 수동으로 편집하십시오. 명령 줄을 통해, 즉 exportfs 명령을 사용합니다. The /etc/exports Configuration File /etc/exports 파일은 원격 호스트로 내보내는 파일 시스템을 제어하고 옵션을 지정합니다. 다음과 같은 구문 규칙을 따릅니다. 빈 줄은 무시됩니다. 주석을...","categories": ["델피콤"],
        "tags": ["개발팀"],
        "url": "http://localhost:4000/%EB%8D%B8%ED%94%BC%EC%BD%A4/six-post/",
        "teaser":"http://localhost:4000/assets/images/delphicomLogo.png"},{
        "title": "Configuring NFS Client",
        "excerpt":"Configuring NFS Client mount 명령은 클라이언트 측에서 NFS 공유를 마운트합니다. 형식은 다음과 같습니다. # mount -t nfs -o options server:/remote/export /local/directory 이 명령은 다음 변수를 사용합니다. options 쉼표로 구분 된 마운트 옵션 목록 server 마운트 할 파일 시스템을 내보내는 서버의 호스트 이름, IP 주소 또는 정규화 된 도메인 이름 /remote/export...","categories": ["델피콤"],
        "tags": ["개발팀"],
        "url": "http://localhost:4000/%EB%8D%B8%ED%94%BC%EC%BD%A4/three-post/",
        "teaser":"http://localhost:4000/assets/images/delphicomLogo.png"}]
