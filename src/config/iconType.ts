export const iconType = async (type: string) => {
  const [
    AI,
    BS,
    BI,
    CI,
    CG,
    DI,
    FI,
    FC,
    FA,
    FA6,
    GI,
    GO,
    GR,
    HI,
    HI2,
    IM,
    LIA,
    IO,
    IO5,
    LU,
    MD,
    PI,
    RX,
    RI,
    SI,
    SL,
    TB,
    TFI,
    TI,
    VSC,
    WI,
  ] = await Promise.all([
    import('react-icons/ai'),
    import('react-icons/bs'),
    import('react-icons/bi'),
    import('react-icons/ci'),
    import('react-icons/cg'),
    import('react-icons/di'),
    import('react-icons/fi'),
    import('react-icons/fc'),
    import('react-icons/fa'),
    import('react-icons/fa6'),
    import('react-icons/gi'),
    import('react-icons/go'),
    import('react-icons/gr'),
    import('react-icons/hi'),
    import('react-icons/hi2'),
    import('react-icons/im'),
    import('react-icons/lia'),
    import('react-icons/io'),
    import('react-icons/io5'),
    import('react-icons/lu'),
    import('react-icons/md'),
    import('react-icons/pi'),
    import('react-icons/rx'),
    import('react-icons/ri'),
    import('react-icons/si'),
    import('react-icons/sl'),
    import('react-icons/tb'),
    import('react-icons/tfi'),
    import('react-icons/ti'),
    import('react-icons/vsc'),
    import('react-icons/wi'),
  ]);
  const iconTypeArray = [
    {
      name: 'ai',
      icon: AI,
    },
    {
      name: 'bs',
      icon: BS,
    },
    {
      name: 'bi',
      icon: BI,
    },
    {
      name: 'ci',
      icon: CI,
    },
    {
      name: 'cg',
      icon: CG,
    },
    {
      name: 'di',
      icon: DI,
    },
    {
      name: 'fi',
      icon: FI,
    },
    {
      name: 'fc',
      icon: FC,
    },
    {
      name: 'fa',
      icon: FA,
    },
    {
      name: 'fa6',
      icon: FA6,
    },
    {
      name: 'gi',
      icon: GI,
    },
    {
      name: 'go',
      icon: GO,
    },
    {
      name: 'gr',
      icon: GR,
    },
    {
      name: 'hi',
      icon: HI,
    },
    {
      name: 'hi2',
      icon: HI2,
    },
    {
      name: 'im',
      icon: IM,
    },
    {
      name: 'lia',
      icon: LIA,
    },
    {
      name: 'io',
      icon: IO,
    },
    {
      name: 'io5',
      icon: IO5,
    },
    {
      name: 'lu',
      icon: LU,
    },
    {
      name: 'md',
      icon: MD,
    },
    {
      name: 'pi',
      icon: PI,
    },
    {
      name: 'rx',
      icon: RX,
    },
    {
      name: 'ri',
      icon: RI,
    },
    {
      name: 'si',
      icon: SI,
    },
    {
      name: 'sl',
      icon: SL,
    },
    {
      name: 'tb',
      icon: TB,
    },
    {
      name: 'tfi',
      icon: TFI,
    },
    {
      name: 'ti',
      icon: TI,
    },
    {
      name: 'vsc',
      icon: VSC,
    },
    {
      name: 'wi',
      icon: WI,
    },
  ];
  return iconTypeArray.filter(iconTypes => iconTypes.name === type)[0].icon;
};
