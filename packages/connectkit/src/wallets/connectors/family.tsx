import { WalletProps } from './../wallet';
import { isAndroid } from '../../utils';

const Logo = ({ ...props }) => {
  const img =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAAC0CAYAAAA9zQYyAAABQGlDQ1BzUDNDAAB4nGNgYHyQk5xbzKLAwJCbV1IU5O6kEBEZpcD+iIGZQYSBk4GPQTYxubjAN9gthAEIihPLi5NLinIYUMC3awyMIPqybkZiXopc+xz3pvOzD4rlWyascy2VY8APuFJSi5OB9B8gVkkuKCphYGAEuoZBqbykAMR2AbJFkjMSU4DsCCBbpwjoQCC7BSSeDmHPALGTIOw1IHZRSJAzkH0AyFZIR2InIbFzc0qToW4AuZ4nNS80GEhzALEMQzFDAIMxgzMONWxgNc5AaMCgCAov9HAoTjM2gujicWJgYL33//9nVQYG9skMDH8n/P//e+H////8GBiYZzEwHBBB6G++z8Bgux/EQoh5AfkbzYHBtBUhpmHBwCDIxcBwoqIgsSgRLMQMxExpmQwMn5YzMPBGMjAIXwDqiQYAOQZcLsEClb4AAGmfSURBVHgB1b0J1G3HVR6497n3/98o6Q0anubBludJeAiTbYwd2gGC6UACBFZY7gVNB3CaJEB3VhbQhNW9OtDQkAYSIOkEGhJCGJrEBGzJkrEsT7Jky5JszXrSexqf3qw3/v891TXsvWvvferce/8nyabrvfPfc+rUqdq166u9d+06pwrP+/CHA3AI8RQRmqFxbyRliVdpcSQ9jj27IASwdAVHVxi7l65hcZAn6NlFdOOce4vCgB5Fc5iXdiN1abSFP1/2PrRoUtiYR/Oy9C9Tr7EwNVc4pwojTDFxC0CMI2nH8hwlhX4D5ZOvWwzy9cHlS8FlzhfwZNlyDN2pPlSXwT0VAtd7yTL8+SDuHOvCzzKdyOButIeuj6HfpTXtu8Ew3WD6NpjnALnFuI1IPB9GK0n5ZiCM9H4GyTJhLqAX1GHZMoJK70Etp0tK4nlhLqBfQF08CFnAgPrN8SHMz0N1YmjluYGwNKDnSeV5DEOnttHnpZ7fKBDyuWJWUHnKqWLUsgyaJ4WbjT2nDv56TCWL6gaw0vklrAv/vpD2mNcWrTpAI00+H9G0G5XWU/1gs8fBSCM1gMq/Y/d9BzD3WiqUpS4zQakyBkDQ6k7HQ5uZi4CgQepphJE66DiuC9PM57lcpsU1auA6Ul1Q1S399o6mF1qXFDq5NbyHqi7QoBmZ5wp8wdn+3G6o6qifRV0vQ3QtbxGwPUbT+RSXeEj/NiUyqQwP5BaIOw8Gl94HAwTKS0viXkk1fejeru02k2+jrNb1gE7d4GA7YwtEYYEtHyhN0HWh6/Q7AQV4bmidPwzDaF00rbpdGnHQqI+vh26LoPjNdQCi3XeAlL7zcaA6g5PYCDBqMup70xahvpK2DkMACmjVvc4904EFApL08dJgAAxVUX3OTEIlFcYYigooPi9fZ0nPtCj6fKPr+2MSD+fUARzNDBCJ0yBR9ZT6qjKC8jRImcxfvuf4b84pLXBdsG1bG94pLSL00i0taHpdP4rv6XnoOiut1aDSaCyYI3AV7aM29KAyc1QwNqSyZ5gHdEcM7kbyaAXfmOYg5vaF2MrQxCzFGFZ3Oj9dH98xPc263t0YQKAdPCA0CHxn1CDo+Z4ysSQvrovTPjkksHCdoLYDtOpCaY3AAZgvYBjABFShWdGfjs7VKcepugSiS3dK/6vt80HHUnVfalA4b2CHDROCG1uDmM87dd4Cgy5HiG1I2OB6uwEC9VhOhxosytZrSSAg2nU9dZ2wRT+MaB+mXwdtd7pD6qJA3ENtQCOxAYZ2d6M+Y3w2dQEL9rntQXXSAGOaO2f+zcACGZVwMRJZ5QtULxE+/OvKHAvTFhMs7bZx5XyOVNZg7kAxT0nkTkmNVNFunoRz6rZXKi4xxvR2YhoDm5ntJRxxroJhBMQtIHe+vj6e8muBTMwKJgFqg/eUV0/8aNWnWRfn/QBV/gDUrh2w0Un9PZMv063axEtfXxehn/JhgdNzHRoDQM2fWiU12Hb3OMyV0K3KeDAbadUA8AQsIDqVRqS1VndOOoCuWCBmIavgdE0MI/D2JCl61eAi7RSYWVWO1Rddp9QN7evQAnk5tJyRUgemknQ6rgMfyozyoNHqfTDo1PWAtkQWuhttxveB6lDqpWtQz7XG0HTqw8fNFF3mOWU+5eKcRNYSG6AN6qk2wNHZKWJPkgqQHstSFZxUpvOJZhTlNaHryQig828AwBFzoFQ0MQ8ziDOYMTGhJ6akhq+gnjGoYWjD8YBEQK0GFbrjAYyD2AAhd6KSFQNZQBCcOMDaTj1wfahjgjU5pB7U2B1UbcPqfCDJuC6qzYxWTPGR3xPTBqm9dD1R6gLAHdO2SSDaU6MJX/u+CA3XMWdES0edk6UzUr14nNDxs/QrfnPlANBSnmkKCsNTQ6gGk+r1A3uR47ykggrmibrWcRbQLOGGErEVqkRT6jjm2qtG5/MJAXwGwajApunhB0QODFrTtECd03VWwmk+1QqEobnBEjrTXkDOkjkBYUIgSHGmkyIaST/wCuCQnk4ETW2TBOSBSei1UkMDcJlFkBBPu0mhnwA6I3BO0nlMs574SrydoRt7Qe0A2VRRYDbjKIVRI6kpvpgcaJWjrkCnC8Wh50I3rkhhdT1RQJ5AZaIBNjZUdqOHDtSub2xEB+5YTpSQM2ApUk0PaA0wEF3Du/qBBcBE1Vnbn1wXAKtxuNzg6qCBrTtlp0FO5Zl0YMHMdeBfDUoteSe+ftxhVVov3TWPQNOv24bbIZ33SaOU81mU4h1pmBkdPEBE6rg6yLgIQAb1fvAbPF0UN5hY0b3GxI+AWYOXwTzRYCYglHN7TzPQgDoUM0QTUCUrSzEl4bCaGTOodhoDPEvr9Gwo5kp+tsOB71ZLpPpb6DYN7+qLyBpJaRwYDqiCrouugx8HxLqzNJ5BBbnutMYT4iUoCYNkBhWTCJrmoBU0heaJ/Or2BlUbMjWAgdww9aCAWOoQUnukMgjY8VgHEBM3g5qvCcAz6vxsZg0EkBIOmsfW5OCEKpGW2PMkM/fwdD51gJ4OAA71GfRmS2oAa9MOJxpIMkOpeJZiufGKqVFUNWSmiS2HKObKhJiuxw8AUMtnerDS5U2nOh6gdMD1YL5hFZYChfpbxwDa/scMBLYnRf1C6aCdgF55CAhMpmWx2vBm4Ad2LMNAnrTa1LW/RkVQvz0SqEmbzLDSOyOAI4E4CyqlTGYAYusz9tiG7uhX28/efQsNoFsJ7aTVIjNDwAkV2CsUxyCepgEIn9MzU8VII6mBTZxu0Mm4LxZgFk9HH9hOLoydEUNnGeCJjpAlQxo4zrB6C/TslkhodLYmWM1R60qgRjAdskq5CuiuYkB0pAZzoQVIqiHVAXPdZoE7axBg8AAraFDTL41ATVsyLRMPaAJz4k+HOJDURZr7+tiKsJZhM7AnwTIjzZN+14nvqdz19BsHjetprBH6iq0krWO8ES5OUouzAut7MQxs78qbagaAIV7hSR2+FwuDSBJPiTHTzsalgqY0us73FSgK07vCQG0OKsIDeQuyT0M1fC82clFjEwZ1aphQ8u9j3myKGFCr+gFJBRiRVtV0AiPhJtToDPTKJwvu5KGRupBUyx0T2EYO1VSCamumDjkDZUqxlA7VG1AHuEPtqr0YRiKHInSqhq0dtQ7WM+VO42DtlCylCdgzoT+QidFl4dLFmGw/0zQ3BvqNQM64i/HrDNqgXsrCOkcR9GA4uPc7FKiH73JQZtq3DNBQXQrMGsgGxJHQBOQVD/RScJVwWCUgWEEjhBYGBlHB1b5ij0Yqm+w1sTeBwIDk4bAN4AdTnZNqbFMycLWZNAUwEk1AQLDNT5PNL1PtSH+oSPbozUgDyYAqJliPfzU41sksYcnNklGm+509WQFNNjSoekDxykwRlLSm9KFAll18bIYBtbuRNsjjGDVucQIl//ZdHiCugRWWeZzUB4lc122OzMnqj0elVVEBHxRd1YbGxswSWneOPrRknjgJzQBeSQXEXlriC4jzgWAGi2xf8UBjU6zohaurcPnmzXDhpk2wfTrN6VJYiww4urYGz545HY8z8FQ8nl9fJ3VTGmad6ElgTnlP2FOAIICBUAEFaAFQzQ0w9r4e3IrXgyVYKEp4c6J902a4YssW2BXrcIGifT0mObJ2Fg6ePQvPpuP0aTg163MjBCqnF7o7GkwFMg0YLKTaMZCEZ5+8FUwMYgxBBniTGDPpap0Sz/PAkbr6aqR9T+T3ZYnvkfYdK6uwQoPztShNj6yvwcHI70OR/wfi71oocnKSNVDRmKklspuuLzRnV12H1L4I1P0K3mKesZoQLRAxwQCgvl0Itl49COKNIBLhBM5tJ+2Lbb+z9zUXScUgJRBHBqxgjVtByEcBeKxsVwBfGFmBsDsy7y07dsDrLjgfrti61fiijXoBG1Lc/pOn4LaDB+ELR4/CExHoE6h2bx6ksInCg8v0r3MAgDqZoDutsZs7HhBSJ8y9IsDO1RV4285d8MZI+1WRdmjQPhYeO3kSPnv4MNx97Dg8d/ZMAW/uOB3Z0oX2DBJkSVht7p5MFxYG0oaBtARWLcJ1wcD+4BA73Ap89a6d8NadO+G6bduk8y0KqaxHnj8Bdx45DPcePw6HI8iZ71nDTAqPOnLfFewEKLosZDv6LCIBtmfXjwCbQd0pHgplJJmDaT9Kt+MjHwk8KzaQ0NAYAPJvNicSgK1kLkeXpfCKiqu2NKu3ItleFpn4zgsvhOu3b4ctkwm8kHB6NovgOJLB/cCJE1k6BG50UDNxoQ5okMSz7rzae6HtzokAuaS7LoL37ZH2V5+3HbZON/w1mwlnorS668hR+EwE94PPP0/mRPWArIdgBl3F2xGMXz6HUA2PjqU0qAF3KGB/VaT5a3ftjkDeAdsi7QHOPSS+fz7Sfnuk/eHIdx6j5MkUoj0da3Tocx233vO9XsxGGUuE6n/n+vo3FLOpvDMCWrtl6mDASWMA671g4HYKzPE+S+gVksgrnQI0VKYmc+JvXroHXhGBPO06eDFDqmgCx588+SQ8dupUUUuIakDGDAABM1uKqEAsPmg2LWg0tCNKte+96kp4RQRFt6REWzakBrvv+PPwB/v3Z9Ok0A7i1eBJojqrCKJ1St1BNA2bUEDSOMTEF0VT4u9ccTm8MWrDTS8y35O34gtHj8EHn34q0r5WXHohmYAgIE6/ZxuA1qBOgF4nQK+HOljWM6UMaDZD+Bp33Xxz0CaHnhmc52NOYNbSeVWBd8VdywCQ7Ll3XXQRvOfii7JkaIWNSosxSCVb+2PPHYQ/fvIJksQo7wME9aAfQ0xATUJAsTETs1L811+4G755z55RbfJi0v6JSPtHDhwgW5VnRosZUj02QTSOJyKra3LzrcZn3x35/k2XXAI7VlfgpaT9yNnE9+ci7c/KmCWZSwLoBFqwYD4bO0MaNM76XtLMwIGaB8TpnREqS795mTvurltuCaJuQzBvvlW7y87wMWjT+aoyMzKQs6nRxQFGBfOUpNv2CIIkHb4q2msvBkOXZfDnjhyB33p0b2Za1j7Kfg5gvTnFi6EnWbJ+jwDu4G9dfjm8ddcu+HLSfmek/T/t2x8HjzOlaQqoxdMR9Dsiyk/bFzAngfM9V14B74yA/nLRnvL89KFD8B8j7Wtk+qUB4zowgIskzucB5HyNJHO6z+aKMT+CMrNC48MHA2iwgz8D6K4TG9hIZgEzCLg3sX0NNOqMBe6Oqu6HrrsWLo+j/40GPSgcY+BY4LTPxFH5P7/vfng+AmNKkpols6TDAuKJPFsAcX40MX7k5S+Di6IHwOcbXkKaOSTT41cfeih6SNbFF6xfudQ0VDdnAcN5UYj841dcD5cpvnvazoXmscGuj9sXTb5/8eBDcCJ1yA5zR0yS+GwC9qzPQD4DUCV1qCA+21vTQ3zxLVDT0XkwyygZ3bsWQC4eBOuLJjuT/bJTSsv2cpIS26YT+B8jIOaBOcw5ACzzwxLpfdqLIxj/yateCTsjLezDLrOWoUz6xCN1wNUcTxM+8cGdEcwfePnLDZiXpWEjNM9Lm9x/P3jttdF2n+aIRHv2HvFv5j/Vg/hfbP0p/Nj1L4dLI99btL0QmmHJuOS+/PFXviK6AKcZC0lIVCFZvDlm4goAzNt/+gDCKGITsymY2Vk5x6HbLoOYZv8Q0cyUsSuLz6eB3paKPWwaH/yxCIjdDhAA4yB8oWEsz+TT/tFIy7YotbJ/FoqfXA9icx1K14etUdP8wHXXRdpXR8v5ctCdQgLlD0RQbyVbMQsNHnhD0pQdTV4V03FTbKvUEa9wbkRd1osdxvJMwuSHIh+3RH5mUCczKJDQwzp/IJNYIRiBarCovEwcPE6rVG4k4BlCfmlHu4D8Sy/sh8xqi1Tf9111VXTUb5HWCvqAL++RQmrg74r2JKT3B/o+D/hEYkDxj2fAxOM7or1/6ZbN0lhfrqMfof2yrVvgu6++Kr8TAQQMkWpQ/L1pliIB5TuvuCLWdcuXnfYW3SlcRXzPcQqU5lVWsO/PdAp7nZPMgxluCnV4pG1JgIGETrf1K5R62rcQRUzNPE1+xB7ee8nF0c+5SzLVFQwNTmuwvxghjFy/OQ7s3hcHeOkLizRb1ZG0Tu8cYF80y7suvhjeSIPXVj4vEomjYYz2115wAXxDpC3RWKamifaYgGl/T/RkfG30j4/l81LS7vPX52+LfH9XpCthIwuTAFkay3Q8VN8/v5ZbDmhaDC1wdwMgq0FhzdD2EHnHFqDOygHbL2UgtXtlJYOCy9Ijz6B+5RysGmkBeyMNEUae4eu3RffbxXGKOvFWXm/MXoEeLki077lk8Py5gOFcaB4rj8+/Mfrvz4/2cT8rHbC8OlDAvCvOuL7z4osG+W2E9hdCcyten39LpP3S1U3lDUEynXhsVj+WAPNujFgIjEXKK3umDCaR3zdBaAE7hQ6UkR7Um1dQ3+LStk5ShcmX+LejykvA4AoxOMNYhdGCXqQ6Abtn6Q3LHbAgPvnA33fl5TCLo+9AhfDvt0Xa03sNPh9Ysuxl6Fg2bav8RNu3RA2TrvI3lUR3mtj45ssugy1q5u/FouNc+Qzu/LyIif82mnKJ1uyfCEraOiBrSZzGb4IxJZH1dQG2KlQjXq7pqvYO/Uph8QTwb5J2aaYnzf69Kc5E+RoGOg/+gJGggM00eft7meAZy9evjur7+jjb10dQJ2CvR4l37bbtMf78QVqfz5crjJX/hl074cpol84izcl0Sr9Xb9sGN+zeJWm/krTPK+/1ke/plYdEM7/fzC9KCZC1V0OeVBIZrEbnIINCbTvbN++GtrQBNhFUZqSi37CfwTuiAz+5YzJTcQnGkgTmY9DjvfSmZzY6uHRF5uPN0aY7G8GcfaKR9q+O6ppnE33ar/QB7vyrI5+TPbq2Pst1+Np43QLyV5pWH59ej/jr0aRLUrr40QO9C88vMhG20L71yVhMQeNUBzOZrxN7/Egvol+2oXMhGVTllcH0rsCbd9XB1DKAA1eWGRx6JKrE6MySdm+hNCPlJkm3ParB9HLQjmjbXRslNkC7cb5SoQWQFF5NLxYl2tNk1us03+ErS/uA38Eerzv/fNgZ+Z60S5bSYSg8BWuUZwuT4OI6j3C9iqjpHfyk8QNW8Zu+8k3S+YZoamzuJpaZDqCtwd4ouAFGvR+BEjMjFqVtSY80A/raHTvh9NpaNjW2OvtT/4LLw9/zYUEfW5i2Va4+ki39mgt2RNrX4U27d2fJt0g6Amyc5jAvrQYqzOlMzgmQbOmviTRnKd0HSay/jClvWllvhuDVu+1kzDdyQ//1lCGpB21upJ6WiHt7GmEzfaqiwgBo91h9T38q5cOoaYJDcoNKp6vg6bkhejwSU18f7U//OuY8UMwDzyIwLpMWRtLo+K+6KJlM6/CGSPsi8J4rzfk6WN7XT9nASqAlAueb3HjrNAaQdesIECZbusWYRBwvrJgcPBhEhwh1qW1oLUoLcPpsbqR3Oa7Zus2+orlMMOIYqKcOogwdfHPgs2ZzREVpid2i6Yrt2+DKaGpcFgcqPixdh69QuChO/FwaeZ7q4MMLpd0IHGXmedNg9Hn368PLIs83T8qSDcnlmIM1ksupLgRdMu2hQ2wsY8CJWnlnFcCfvDCxxXZOg5Mr4/RsNufnSEU5H6slMasPrmyowPb0ttKaHsGnrYehfLz7/a98BWyaTJqS8K9K8OSn8+Si++HXvUZo1/LmnGhXHb8lCJfOM7QvjQ0cC0gfdtx19BgNxIORXg0cm3P5rhBqvQfvcmAjgzCH2rKEVcgumEs2bR6kNwM2fQ5O/XFd+grQfA9hYBer7IRWbUMbApwo8WYIh0u3DT+d+qsEZg7ebEjh4q1bBvc3Srsx/RAA8RyedXlou9nPMbBQ27N5c563KFI6qDqotwiDbetyUgnUpE45A6uiw8iKlvy5ePksP3+wG4BeVezzSygepIqmltC00tql5xNDiQNry+LQeQ7UFXeKAYeGQUu8ZVTruaSFBenH6FgE2IV0NDr9WN4BRm4w/9Hauj5/LZUlPQmqHXFwuN6XGc8cJ5KvpA668jqP0OZANTmCRwC6HqJBXpbVKgPR4ktMZsfO6LIbY0aABpBhhOkuk7JiZTud1BXbWTSqpeq0iJBmXxsN55J2o+mXSQtz0hqgIcylKbQyGbFpwlhGMJBBtU2gzNjmla7y6wdxcIjsqXEfwQawcxojKqR+A4X606QqDyxYaPlXypzX880zVfHgT96NdG5wtRJllmVogkrw5/Ix74gEIddKEyXWQqg2dtBV9OmXCBtI+pKl3UhoDZxxUVqvQkbas4X3VnwrTQrJbzyjl9nSnbqVSC2B1zSEUZpraVO9ZpgRYnrWAvVqOQRqqMtQycIuDTUwhmvd+42QNBfjjGlpHNTPeomsymxJa/ldwgTxfWHs2WUat5UNwNDEOJfgeYwNXrQGS0IDQ2OJCmi54mmw5myNSD/5S3bCDkthvY43Y80WhgYAemZX1uXwRJjtD/ggiSrrytFUJS9Ntdb3g3zsicqfajSo7AgnWjakUV9OOiMo6Y3OjgtOKyiEaknuA7rGsDcd6apcHwZAddoE5jy7LMq9jdx8BNtpuYFawqiBfwFmq6eH8WLzvfTuD+Mnf4zc1wWBAjWG4C/Ubwh9EEB7kMivNkEALLAlU6xfIMfrQ2fOwrygwWKkMcVBsCCE0KDNSxmVN5Fd74V2A+j7Uvw825oBho1ygorXtGObJtN/VL76PuCweB1QlTsgtQHkwQCYCup7MJqMXzBbpKX0SQAYdGauc3BpMAyzPr6+Jt9FzqROdUGg1rs9GZshGHwyn6ZjBGu+lAWoSwHF7KjL2aaIQIXuP3lCAGEc8uAq54HrCmaws1aQ4FoX1X2fDUtIkZbqIS2dg6s8qvOA7lmwwJdrBa65aVs0jKQfpNW9YSRt0M+4zqo7aRPgUPntaWNBpNtM918tBExnVcW0tG+i8eDpM/myeMxC9p7NNNbQdSLXiX2Y2loHVwt+URTM7J9soQCgtkwL8PCxYzZ3lrrQICLYiqP8aUgc5rCTKMF3UXAA1M/qcnF4v2VqoEqLwdanNXtViXb5jkk8Fy9pcTytpFEAb3ouNPhCOy8BH47w3AHID/SDa191a3BtOmX9gX0nnidMlQ8VeACY41AJR6jxY9u7pTynLL7NGryZWDRiP73SVwqoawLnRbiB4xAeTUtYETe0lOW6hFYtVY8HJ0m1JNeSkxvJ8XyYt6LBgEpJHANULdl0owebdlAejv9ii8hGPSUtzEkHVnJL3Rp5SRZhPEsxl9x90xah/SxHDPgPDUHUCEWDB7jr0GGpOO/XUsZpYCS0frfHrO+dC6x77ph3OXSFmkcI5uWU+hJRaeWT6zP40tGjlWBVcZM5MyOoHti6Vs9YOmqcgF3HaSkL4xJSD/JETTcaEjXQwdWlBdRBy4/ELUqLjfLcuQGzT9voOIYVaNvItEGjOAN0V2xwYNHtxGj05Dx8/Hgcd52Bmiw4XLmX0EKbxRrYHYQxTquKgj3MwuEApJbLikS3PP1UW2L6YlABERxjW+USsz1t6PI22l9JNX101H99fOvFG7nm3wD23V2+9s/jgrRjecNIOWP0wkjeisd8H4iPqPjX7Bz+NrWFFgAtkOnnTMBKiw4f3L+/rBFNpq3BWAB5+V+RaPvpYGYo1Hc5Br0xhCaIZcX5YFe+LEtsdfCnjz1e1mv2EgOlzLoCaF/j+De4Hu4ldx+cNACwkhpUgxIgOK2Ol3vQAAo4oIzdw0baMPIcNs7DAqAvQ4dLq4OPF0VsUNEGS4ARgOs2ChbUrUOeDWDGYQkjH3v6aUCqgDYtZgrIjDcWnB6bPgxXS5TBoAO3KhChuurqCv8F1M+cOg23PPkUfOtVV7KWg3pSOaMlMmgm4zDeMFeBeHRgFm8eiAPUX/uvN8Itd98Ljzz9bHmJnAYdQHUCfW5Y0GKVC75OX4GAjgGI6pdGl3yetNLVl1wE3/yWr4L3//V3wJ6dO5qg5mphcKBs1FU/Y9pUxfPGR3oskU4/8sST0YlwHLZu2SQTI7LhKNTtLVodRM65/VT81NOq24l3nLITLOU9Dl54G4mxefPytIfKpIM/2/84vPuyS2HTpLG6KDa4xyBtiASHU0D9S8/pdk2ndzyyF3783/4ePPzMgbL1wuoq1YfBqlbsDB7AwXSa5cKLhWzceCqsMSztUF3n866k2H/4KPzGh2+Gm+66B37m7/4teMdrXmUpZyk6B+iDENrxnkYvqz74+OMZK2kfFiD8yC6yAAN7uXo6lM0DNk0Kxm3H6omEtAUwsi8aRUqXtdgrqvKn5t0EbjvwLHzi2WfhGy+9rPoudal8GhYzh/2ixdNimSRpCPgp7dNHjsBP/s5/gMfi6HnTls3QTTrgr9eFKUEDur3Y4cbDQMYtkR4b58uHgmVU1ygS0KwBR+Ixz8LF2ZS9Bw/Bz/z7P4Y/+MkPwIXnn2coCiOdOYTlu62ZA9BgJto+9tRTcMfBg9CtTq0NjTwwrGt56y9jqmljcaf5YTYNkiZBNhXQVLIAuSxAy4tts0rJ2wuThJ5EUP/SPXfDDbt25w9PTd6qsAANldaQ0uLvbIlrVaf08zt/eVtssCOwGsE8XZlGQE/iDVkCR9nwQWyxcnPcLvurGgyUFS9kKwoAMMsApO/30nINa2uwL0rrf/Whm+Gn/vb7hnVWPAdoyqMBDUGZE14ia1v+udOn4dfv/SL0Xfr6e5K1esDi/O1J89e9cJwLD6qQLQJMVZqk8HSebPAyJEAFcJbUNKuTpTP9TiKAJtMJPB5nDX/v4YfgR1/zWjOy1p0GWtKAJQHdN+mGnXLA2Q994V6YblqBlc2bIh0rmR7eT4VHzWIfkqQmWQ3a1Pr/Q/DbaeQ4GvnJFhRpu7wcn+od22wWB+y5k5+FW+970OQnPGAB4u61QmgkYsmsaWP6/t9H98IXo2t38+bV3DbscgoaxIRP3oexVtjZlp4W0CaH2BlhUEGZfqSK9iSlda8pNkiXiVxJ77hGSfDvHnwQrty2Hb7tqqsNogNn7mgzQlqBGHUicNJApU/k7z9yDFY2rWa7eZpWbsoSgF5L5IKdk1zAremDNsMcKXNDeInSChFOl5PlXPmFtF5cR1I7DeLTNlhpQ6J4/vjhozUrJYb1Ng/6RGNA32e6/edP3u34l3Eg+Cv33AMrqyswjeOrpM2hKwLH+J8DezawmhoIRuhUPljMmlFbq8FEMoeqzvI0JZQtEpAkXsZzUh1RVCdCp2m9iPUz8M/uvANu2L0brti2XTJHpdKQKiGMUi1rOr+Xzq4XiPaJHapLpkZaS3lazA1WU9zri7M+iATQqkyX5XnDHaf1vgNAm4e1OkPI6mLQp9WFjKBd6hwqoHl5NqzGdH5c9u7uijadRFCtr88smMGaFyw4vAbVNDNtehZVDgXmJ54/AT/56U+RwEuAnkRaJlmjyN7lAOKA6D0tMAR0K24KDZ7lc2r0uksnmvqwlObBGm+VkBmWiY5Xqz2cOXMWvufmm+DfvvNdcP35F9AmkZYo6fTEiWDfQm2/3O2AzDSD9Ppim+XdmEKdgSrbKBd7LZUle3SEYkblvLyNpKSSLns0YCsNbjytL9NlgQElNQOnjHOwbBQPdQHxkjDfibwJNOZB40vWRQlQwljZNVp2/3XWAS/X9cSJk/C9N90EZ2K61diRVnhsk9sIaG9G/R50FTS8G5h8Fui0g6Y5hc7c1IMk0lu5PtTVOHPvpzbraEQik6E/nRbTI1XgWLTb/v7Hb4UHjx6pPVcfjpONCaAB4b5Ckm9Z4zcDOm+yQwxjpuV9s9PCuVi2HS4b8WBNg/W8z3sFduZ+jW/FdYP82mnxHNI6OmIdNK25LnIfch3T/bQ7a+nENW1S8XkgNumsKefaQeJY7atGD475DH7pXJTggcOH4e/d9JG8WedqBHI6knTuJp3gSBcZNB3KzNCf/8EgroYpqFGwF0b1RR0U/SNTkYhkhvB+00XChdz5yzYDsBIonwDPnj0N33fLzfBPb/gq+JtXX2PVujNDRFqHBoCVamtpZt2oxT/Oe/uhbFzJEkBLAlMO+g7TkK7YkKI6rWHkBtKCq5BPjzpLvbBmbT9eLVb+kOTgvbtzW3WlA4ArqmVe6JccXbOZKqA7v3HfPvi5z34Wjsfx1OYo2FbjuCZJ5zJQ74rggerVYJdw0fb1qyiRcoxB3wkVhqfMS6cxABrXtQdVYHPv7aUiJbfiwpvStG5B5um1s/Czd3wWnj55Er7r5dfDedGW0iZIAMs548NWNKBOr86RmUEHsIQOxcyozvsuL2ySpTiZF1rFNqXPWMAN3NtI2kacviQuS4fmMb0AHRU/gDs6zR1QR2cV7sHMJsigo3s6sJobYi/H4+jZM/DnceLkf7/jzuzx2kxATho7gVkPTGWvcuqsUi7jF2AgtT1PNG3NhWYM0whY+VyjP5SlDMoItPai6oHA7P7tphORGskaOLO2Dr9y793wx48+Aj/+hhvgXXmd48qcAahYuIVKQ3A0GymtGhDZrMh7pPO0Kt3vOqG9NCC9P0CACE1mgJK6MB40gWGDaeflrdIiEYNQec03i2sVqRN38tyMUicu9L6OVDc2LTy4USdDa1boLD7zzDPwC5+7Ex46djSCeKVI5vg7mRavBsrYpjzBZoN0Iqz1GJC3iJfQeJdDp8fGRVCMqB8nltlEFv/lHY+ySHXeeWVSV2fn7eGeOnUK/sFtH4M3X3gRfHeU1u+4LC0yPjHdrSWB5VqBWDc0qywg27MyivbHBm1ysJkSiO7CgaDz9CDrGvdAXaOLgzlpfZqxMJJ3BXX1bBThwa634oPONjPUmThklU6SmkVgUHQEHQfz+1paV+NjTz4Bf/rww3BrnAVcjUJsS5TKCcjpSJIZp8WrUex3EiAde6CoDEQZ2LIlUDRkQ8DAkK0pND/B4i/BRb2PqMNSKGWJaGbeOJ8M7OzIR7OBZ1p+ay322LsOH4Q7Pvks7Nq0Cb7lqmuixL4Krt+xE7bweyCKaiEFhxI7aNpp8ANYJDX7oYsqq1+r16lV8lMj2spR+lbdze+8+EVpF8VBlYrlHBWJhSPsnWHPQpXQJR3PFmY3a+Jbj9U+cNXrnYT2gQVJAvEjcYLkxsf2ws37H4f90S2XgLs1zgGsxl82MVaS63SiwUzg7IY7+labWZXnGTF2j8LiHde70rih2TDV7uGepCdoGHCFoR1lR5t2pj3Bk786VnatW4Nj62vwOw98CX73/i/Ba3buhn90w1vgDbsvqiNrxUwPbFR08UieX/EKaNcRoW+L6QWroDoGCkAss+iLHlAdRvcwGArPSh89q0yKuWkBqixqgUp5BWyfIdrJHu0oF9GgCNVTRav29B2aF314QoNp4l8Wavprnk8+9QT89r33wL0HD8GZfj0DN5sWUwZx8WQkTxeqyZMwUDGoOiWohgzDSoYhL8zkBJ2bdzncyGIYjLejlCIOfCWpAar3gPPN7xbQQjRp0iNJ6TWoWy3vXtkEb9+zB959xVVw+bbzYOvU7ketgc2VNUKVkYEgHpcisrC6nGQQRINazZScB6qBUjD15iv28zINoOJ1lNYYAezNABbYtmrtvJstQhJX92jdgUHbp2xeUHygjh+g0q5DaERw3F+79DJ444UXw31Ru378ySfh9gPPwoEzp2ETSeTslovnub3JfVqkcjUltMYx5xCknaB5rhpd45TOp55BzaCYY0ZlWlwEqC48oJdlggKNPE47amUvCMCrdu2CvxHt57dGBq120/rJTbDMNLadizNMR6RBBw9AFHjp+WK/seYJkl0gaVwYr9A3KKZVeDv5RtLOS18lGLi6IzC1JZq0ZrruCuDZwigdPNW9LLnVXGc5VPzojqabPGmArdE2fsvFe+Ctl+yBY2tn4IuHDsGH9u+HLx47UvaLx/IFk3QiZRoZ/57vwFxRb+uKhaBxOORgc1CIMGSp//5uUJBIarAtpVpCppbjvws3b4YfuO56+Gu7L8r3+c0q8I/6iwaILT1l4oBGSQPnuwGG0Kt8mxnwCAohoKU1UqfR/dkIEh8C2nuhLRPqPTRpAXU60g3iuAikPVhSS2yFeadJwWreZN50ltRgAayBDfqaeMUvqp2/ugm+bs+l8DUR3HceOgD/5oEH4bkIcp223XnRMQGbKVuxHmqcxvih7RMoX4KjtAC9DxCKqYE4LE5G3iqa7dfEsbQo33dffS18xxVX5+18jUTW57XWVkUH27HBVaA0ElKjkfM+qA7lXtDGvN1mLSuHLpjy0XGnIdeqUBkJvt04Lc5J65WgScPI5tC18iquVQSe8QVaSCYR0NkJCmJN0/8cwChvXo+QvSkyEI0Rb4ua9g07d8EfRz/0H+57nFZUqsANHQg2mnWngpDOMVRXKig8tviSzo0fuiWZwT3APbxcl0LQi3+XSa5U/HNe9Fz85KtfBW+Jg76UfBbA+D39wSG430ERWrqWjRXJBYRgjewuI0kkMNh69I1M2xgdioA5WG4+Pf+uLdvWm7UcKhMABCXycr1ko1qVToPSXgbAI4JEYYmAVuLLuiwwCJtjO3/ftdfB1du3wa8/9CAcm/W84WWdETb2L/+xqo5BDXpQDvP5JyYHKoNbZ8T3cCQbrBlAVYzCk/IhQBxa74l+yZ97zevg2q3bq2sogJHQ5hdqJtzJW0HUpLRbJ35osaeNnletzVIJQEkr1zkVHca8Gr0HTg8uEN1G1CxoLq4o6t+guF7Kqnv1odDGg+L8YlJP2qthjgXNE1ASWl3Ly0hhKGR6dfH2iy6BK7Zug5+OHpEDZ8/mWWQ2c7Rg5NP0spVwQN8DaJsc4kWisQ+03HZa2rLNxSYGQEOKq/cJlE0UmNXx2Uuib/J/ffUb4OqtWwXM/QiY5V3cMGS0x1MLQ0H21sU8wma3ox4to3JXFcb1ogvZzRbAlaFB6wE8L8zrjc30uDBv3dSIxUmHZD4hMUrkS1fbMGutbC90xQ5HrPxXgsT4oYPjf2WjlMPP8cJDoO6njUx//g1vhH941+fhUHTN5o29lamErYqhh7Adh4jJYdxc5bmpj5BfY0JY6YagdpNlVQcsjOoL88npeX5k3v/5ujfl7SqCA7Ps5qWYKcwYntbrUM+Hn2WhSCdWbahsONMiHM8vOoogx0Wy8q9EQP4rAGBxE2rHEMFdUvNsXK5zN7/niI8elHRW9yQdHR1Ld/plMi7dvAV+IYL6A5//HDyfHOFsCmqLAEBwlalDmnFW5UubaPeyEr4pzH2XgxM2l8BqPUeABQJzGgD+WJzW3hPB3Dsga6kMYNWbzm8ecaH1y7NRWkJDxbKWLEkqB6xAyA6+vkqA+XyBNuJH9eNI/EbyCPayaht1M3tVwlDFSGU64g00KyhtElyxaCV15k8Q2ZGD2NRKg/KA8cotW+GHr3sZ/MJDD2QTlN/HblW9OFpxXvVH443JYfdVrg/o32GoAxEkRCbpnDYRev+VV8G74qh3RvyVjx6DVW0M5EWgboGMn5FBEBKQlaRm+rVG4YmXOmaszn+v4kYDLhGvicZzzMPFockbQcxBJYmLAGqMfZBMDuyabjvdETS4fZPoTkpkiCFhNn2C2jbfFN16Xzp+DP746afyhBroBQO5h5hCQMZvdWIsGHb4ybHpUjzGsXviECKi6POmWRkEfssll8rdwYaNAYy7bOA6WzJ47PCAkO3o8oEsyzOa9JFrkPNiawcY2GV/BUMFNO+HbU3A6glRTwhgqKPzx6lKW0q2MJwTGITgzBBqQ7HulPmhxeh/d821cMtzB+Bw3xfes7YIunbBncHgeuzeYFs3YRS0TArbOwYVTPZzP4vM6OEfvex62B0d7t7UGAAbykyWH1mbQzEPYHhuAzUUSSFtS/M1H2VNiI4kujs6d+jnx9K37p1zWlycdkA/A6Q8i4Zm7uz10zTWUF4ocOgd7+e1j1l2IKhz/RuP7ZMV+J+vfxX0eQfZWRlrkVoWM4qaUVNWh3fYanH5nXrjXJ4USVWnseug0Kk9ILdJktDRvnjz+RfAW3fstBUMbXNDshgisxmkh/ruyT/80g37rrCtU8oFWXjKLBHN5gtONh+oPj3kay2LPAtBO283nFY3Zn15B3X7gDSRekYzQ8kxPRWKlS8esADtpgijF8N0rOwkwvHzzXHi5TXbt8M9J54v73uI6w0sr5qmQgAzsYI4tKFReTcqb9BkI7OFRtgr1RbKyjzrsxm8N/ofJzQL6D9Pp6SGgWBya7d/UCUX26kt1QXELK2okYMbrVRgFy8I22KoO3cj4AbMkRczLbbSq9E+irnU0W8gs4C4xun5fWQ2O8AKFD43g/URAHuQ61WuUnHyNT/3XSjaOEpR+PZLL4e77v9iERSqg5VHEDS6ZfYwODMDcWCC1IkVIcy95Ic1XoM5AMggsDCgz+bGZdF2/oY4EBQprA5tZoxJZ31vDNj6XkuSAgNUg5pEmbz8wxKM/LPS4AttaNUxXtKgy7Fl6rZiQAfVGUVrsqKiNmKbuZoxEzCZqnWcA6g5AU0WtinlW/4LfcEB1inzBOqv3r0bLlxZhYNRAOYPQeT9GX7jztY7SAGqrEZbdbBsUGq5UkvgTqYGSee377oQtqaPIIP+LB2Mm24emD0zlr2WjpDaU+xFqIMOusZO2dHs1tMLRstX41jvdapzmOdHDnTn89Jj49rRhnw+llbFo7qHavwQlLEs0hnB2MEBqubTkhX8NcC4hg1Drcn5azxcsLIC3xy9HrM05upDNbnE1aILC0uLkMUv+EOVxmikcwDRDInYtHliNPT/mz17bCXCEMQtZkAjDnWcEqymyugliGtoMTPUr5zSm2qctndpPTGtc4ChzD7XtO5ap0V3L5/yC0n0joShHVUm5rrUtX7eVJONfZQMYSg8WjS2Qu8S6OWY33HRRfBvHtsLOOlLpx18V1d/gzIFw5zy7KZBriba3PDACvKbattnQG+NRL32vAvs5Ik2ORxj5klnVRTRB1Vz+oQaBB3NGKRGS+9Dd0oJyeCKPkmCMnUcnA0HG7B9XfHzQ9hY1rggr/rKXnnpCrlRsIKgY3OEHhETjNfm8HlqQamiF5LiyAoj0lyPn14dsXJB1ObHI3Y6Ze4FJbwG5bNpOBKmJoE/x0Ym6CrN3o1I1FVxNihIPAzUmSbOMyHYrEcFjA4BGpJf1KlSxYoZuQzj1cAqybsRCb1IDPm0sGR6nXaZMlxDy/MdGmbkAS91Ho378kxXPUHs6XBFDMqcd3+cTPMrOLCkwuuiR+y2o4dpJ1l6E3IseHzqXwplYqUlnRq1rMCriM5xaZnWKH6v2LRlkFayCENmhJFffW56Png6hs9l6sh2lKqoypeGxkGvL14P+hpPNXTpAG06TJpavPyMpZVztGXk5yhikNbRUYuiiSKPA9brA8mgvt6RASSozgADb9QYqNHdGhM62toRgUeRaUq8P3woC0R24dVdrtCqaHFV4qBcvh68D+0TDRpGIbMuHl4k9OVbNksluIB+RDpr4C8bWkJs8LwaELHZUdIRc9jNhUoasBpOL3KEKqnH+AKN61Zj4pxrXPD8vLRyHqrJkZtYOX+T1yC9KoryDVa5F7ind50BO7fJAMwAoxLcn7faJwV245mBJ52nwWGfPWRBFv0Z9GgYCscxwSFbUjCDEGqeY8xmKc1M6DMxPVyc3qijAoNmDljmhEa+LWAjjEvqUQZifTFJv/OLyn6uJgY/UtaHkI/vEIcEtK49sQDj4mtR5TaSFlx6+hAY5X4BhJga7JqmRkWZfOqaoIQl4lokzrsXGkcK50+nWRim9+YnQZfB4MGBK9CU5ezp5tt23r2XgRPql9wazGn5liyho4djhQcZyPdcviPXY20ZYAhkfz54hiUzYm04ig+6p2p9T/H5o1pwlQdoistip4Zx0Zry7lRaiVwi30Vp+TrU2V3UqMlx/N5KAQfS8g252syjFhe57VqdGRptRTxsC5eaxC+DwaRO0xp7PUvoOEwPk6pNQGEPsfqdEcwYQYfhV9+ukUKw0XI7aNWhP3+d36vDkBeD66YEp5tjQK51ACijfiA7ml1UoZohQNKqq2BnCnLDIwgUhm6JWgM0XgJHNbq0tefAIh1l0/K9IR0y1ymDXPvqKPtyzFOsobImAwGjBnGohGgrpkFpO4L6mrkGbW6ox4omD7Q8c5AbgiHU7WMLEY0bKgF2j5VQGhCDpdB/5lIWlOmFKHaMn+2HKzxocI+B2l+3znXP9irMlJdmvzITOkA9oWDcc7TgjEiNrvCFyK+DDt0qWHsVYKPkF5LW10yn82AucXnhHiGYOhaPAVDlxy8pM3o6GnSxJ4iYyLf1uzatxWf8uadUSg42Xg8INajX88tsALw9CHIOiA47wfGMsBhq2hRGJlawimNNpDpnYiszAhw4c8YkEGKCajMVWsxyVLTvIaiJhMqknBetDT1w2ynJVDJQkhTppKP3GNEDiIjttN5EW1EESxB1pJKKJXkD2NyKUmZXy0NVvhaX4r7p1HVQC3CoorraYbIZxhMrPDBcFEYb4dyCl7VHzq4De8sEzgFk3ZQCZWw8PcRoCnZQOC8IKIPKS1aLzoBK65uNVUKDG7AthwZFamwFlxiH9Jm2V9PdbC+iXo6KXXUpiQyqUibO5FDpLSEAyki2BIrbTzcTQlMkqLSoOWI6VWjGiVyiupTlFwIYkwP7KsgJ1IHfhR5r9OB+/fmisKDNdLGHzpxWu1yR10xWuwrVtSht28hEheZOsnriodanfjdYrtU9Sv+lo0dMVnodZzHtGrgQ6a3vIQw6pCETxqQ3DwRbElmBAt15Dp27bnFtDAXYiBnrdSNpTc92PdSnTzT2TmLnx6r6KnzH+h2UpMX6bjQzUh1sGnAeVZiBUVgGqBqwpDElmvujA3U69j7/PN1U5QGBG5mkOsAFw6Kg+Ffip/OaDsTBbXnt6CfN2MGjJ07YfCihMRPVvSwV6X6v2xOHNAVdOLTpzUlY+nTki+bGk7fu6Gl97Xs9joEWYOAC8gTMedTcHEsrrYbDDu4DWwyo0BBoYRleST4zF0zd9Bp3TSqDJUeK16BDm2asKuZAe53CHYcO5gUdDVhHtLjGoKePabSbBhGAsfGQDhrg+suHE7N1uOfIEXj1BTtECxtCAYxTnEEN/p76Ne6eMKTDS+rgpHIYvHlGQ/tOZcrJ6btCSUu3tAsLtaoOtaEZ52bGT2hScWj7hC5Hp9Vli6Zr8AD1M4VAZegkBvblDbwAMksK4qeHJhINPz24AgxNFVS0oQK/l3ooJObzew4fhsNnz8KmrZuBNWt5rBpgGi8BxgMX01x9NP/wZwdYkwfu/RDcrCpmoKRnbnrqCXgNAZrHKkiNItovDCnBFsGacfNqY55RElmtcWdEBADZ01Dqgwi23+iPZw0LJI3vqeKCd5qESGqmnZt3GD47SKsBBLXs/NupXsCjcn43lDulAnrvf0EJiwDW5Ajgx2IVzKF2QvMsBzXs+C/7HiNw86KanJXqlNJulqGhD4M4lX2lqV7YIU2NDiY9q3mkrZH/095H4ejaWT0e81ga/Dqa7L0W4+YF5eEQWxoa3+Pxd/z6+73WN4PdyDH2zaD/1m/ed4MbyXtuWqx1oLoGXy64Dx8kfn4QLUhAbbE/KNCKpFYdUoSbki0n19fhpiefzPtKopiHXusODYzABSr6NHC6eRXRBXCGrDL11g98JFto/+mTcOszT1WhCCPA5huuUF7rwRhG0Eg7Qi9wBVlKo3rfOfub6yc/SGDgOJQ0uLGjewFxG8nTHVy3vGKS1EXFq06Kgii0nX6kzduMBSudhwJSNLKAVwnS3K2IhA8/sR/2nnietmmuryWIpA6s+RXQCUDBla1De0sKHYEAowYl1M+XMO9PWDYj/92HH4L3XnZlZig6LonPODgGhhEilJrT9yWJZm4AA+QUiV1tSLZ/6/d7WnzoOo/3ngF/5oSXKq0OIhz0tWJa8YagVHXoARqRumCBGwKMaktUJWozE8DKFv54KE1x/+lje8uGUoQdmfhqcMJYCsr90vrca6nN6wcdklWPTCWhmB2JyNsPHoBPH3g2rxfM9rNIaEUTzFFVnhCDaWyrQjZ/RGNojsoBYNUE1MkHwTlaOhSfscUwn5ZPfdpRhqq0rV+X1uSlz/vWbWI+zRnJjc4C2vCzYqZkyd8aNuqi95fMbFM0yJyWO2575hm47dmnodu8iSQ0vaNNhRQPFZg6t+RaK4jJYfg1gvD6fmopzXx7lmzo1OOmUwiTKfzE7Z+EE2trw3EZDPHVbDgP7jGafLwTCbwCaVZVtF5FGIC8cZAnwHzLR6bAeNpuGN+65vRj9xalbeVtxGCNs68AKPOLhJBrYBh0QNUuGGyctB3/hNq+HbTJOnDqJPzs7Z/JGOmmK1kAajpaUleEk2nnNiQkK1NhegI9UMBKSRRgM4PSlrfRcbIyhSdOn4JfufcusZs6B2JU+TAjhIeoDo4Plr/eQtGVr7OBZD8SEbxoIxoQdEbtobI/669dtEXHDY+WPe7Tdy9aWvYu1WsHXKyTKKCAzfaoB4n8jhyadYM4Hr9ilQUTdaTrP3r0Edh76gR0ar9v+QwuI0pnVvFl5R2aejJm01/jtsMBeOuLSkGii+7S343l4vKHmph73GQ2hX5lFX4v2tJvu/ASeM/lVxq1xhNXKBnTj1J180JL60s+Ipn1OtGd6kUMZLAMFB2KhgeguFPobaQdBGKw7f0ATZni00JFy2ASpzZcHXgQHUGLTRDzA5VNwO7VIDbrkNdGcKibTQsoVHKR6sCSmf1I+vjQY4/Br3/x3gjm1bKpUPZwdCJsRKhKmSisq6apIxrrgBLAezkaDVSXX2UGQ2OmiRidXXeTDOrUA0/F6J/49Cfg8RPHW9pwKLFR52aZGRo3jJRGVQctIsTe6ZR/uhPpXJct6KoYaal4oz+7kYq8GGlV2XPpoLQTdHXRYpK0ledHp+IavOSIlsWH/ly1H4N5oorg86dPPg8/dfunIyYCdKvTMiCcVI9T0BkCmEkfng6pn9LBaOhcHUYuGDRob6OKZ/EfiUxmx2Ql2kfxOBxm8Hdu/At4MlZIqx7+1W0EXB+0jJMylQQPY3Tq4XSngQE0cKV7WHdq4nhxebmGx5EDGgduIP2yaXFeeqRBlJEWYNLXDtM4Wk3ueBoabOZ26kCKGxxT+n306BH4rg9/CA716xkXk2Q7J9OUJbRkCCQwa+sHVRY06Bs0v7s2NrLEMZPSuZ9w6RQSsdiiidBJlNCT1Uh8VC9PnTkD33PTX8ADRw4bKe3bwHTAxZ1R6OXReaGHpVpn3/vN0SVeJJh0xG5wjs5nbQ1F1YFR27rdaFpYKm3XTAsL6bA0DydcbBsBS22aWGHzQgRGsKaHP/ghxpluvwmBin8fPHwI3v+RG+GJU6cyFiarqxkbWUJrDcT0UaMHwhpAo0NhbXsfOhgBSTNoCY1Qu49Bo5bSkfhNqzDdvAqPxQr93QjqG/ftNSqJe3h+NNjyvStJ3Ejuvr7WYBYA53g1KGJpTGqbvR9GbWu1bI5W3Fj6jabFJdP6vMlkEoaWZwIOTZb6+ijV3fFRL//FfGfvRnDto9stS2k6WBN//Mn98L0f/gvYf+Y0TDYXLGTNnSSz0Aa1XRAHps4A7GBp8KEbfbCRUQUMqQP5pY8tOyWBaDfRrGJSr9y0CZ6brcP/8LFb4Ne+8Hk4G8/FAwJOUsOQeSKFg13ERjO6dLBOJFzQnc1LbLpn1sDDZQ5YMl1JixtIu3y+7WPgmlMdeCipARaqPxeUAJUsuO20kEpt+y9jG//AzTfCkX4WBdommCYMrK5kTGAyNzplP3tBKQV6c8QR3cCo9XIggneBYagP1BdPyug7u8LVtkeBE2WTFYtbhhFHjF6P5sc/v+sO+I8P3g8/+7avha+77AroqGdWVUOg1nWDOZpDh86ty6HB5cAMUD69yq3gRs7NkSnfaxHCBBpCUf1dIm2rks20dN2P01FeUIK6vFlHz6e6zpQrb0HAxq/xXiggJwR8dN9j8HOf+VR+BWKyGoG8aSUem/J4aiKejfoWpOSM5aW4YsLWOQ5U9ytGHJCVN8h89R0aFZFzLDM5qKa+q1slqNnxOmLNg5KQPB6g7K0C7Mejn/oHPvpheMeey+F7rn813HDRHtgeGSBVRD26tcQNANJqhdzhnBRj0KBqZE5jnsd2nq3zVhos3JlLqUeKxDeeW3qTG2jYA1TvvHmMykd3Wq0Ng9WGuh8PqkTnZ9bX4RNPPA6/f/+X4PY4A7geTc4E4mxukmROE27JA8ZChds56GxVG/G7JxnHlD40qleJK2G6kEdoMxGzQ14thboXAYRqKrD663jbsSlotdrHnjo7uwY3P/0k3BR79cvPuwDefeXV8O6rXgYv27ELNiW1BNbkgAXnOSgpHJRak0EQn2dSOjvBYEAwYMNyGkLS15dsFvVAk3fAdiO00vYqQlqcwMvCINU12WhZCyW7OQBPJmVtZmy6eqp/TTXo5MTZs7Dv2BH4yGOPwI3xeOLkiTj7F8dOEbwrEcRddgqsFqkcvRri0UD13jNrfmTgwiivREjC/GA3DZITBPvmfbkZ2Mxwb3MHrqn+4lg5+vOCgdk/XRo6/eu7AvY+MmEWzx+Obr2H4szib3/xbrjhwovh+197A3zd5VfDhgMDtkPTgXiWMDhJXc0SVVVss83HLsIqAixuAZ1WnczLW+LJYrB9oHzRXn4Lv+sH4gG8vc0dQX+VrUNo0Hd3lML/4vbb4AsHnoX1DsskSQTylFy1xWU7zWDOQJ6wZGZzIYCxjzletw2otmkxZKSNllpOV2cU5BoHta9fW2C1a/QX0HmwqOhR7qjLz9sE33jJ5fDeK6+BV+68EFYi+oMzM4x6GqW1SmLjV9amBzOqQ/uc/CyHQhyLDHMeWFLM40bSpj9iR6ajr5n02ZAmEzTxJdS6Iw68HABK0IfBcCCH1128B371ve+D+w8diJ6MffDnUcMenK1VIOf3NJyfGSwPeE2QodStLbwRjcjB7LEy/AwBbLycC3KJokBblWC9nVxCZdM/Mt0C8FfX2CO9btrD11xyKXzbZVfCe/ZcASsR7bNQN5rx1VwUcppOgVkDubMvJaEGt3CW69nBUDb5EUZonNM1wsj91j0Yzwtxflpt6HLaPCDsgPe8yRvk9sSLvD8gVp88DYbFdlb28wDkQVEY/yST8IaLL4W3xPb7wJveDB9/5in4w8cfgTuPxrmGSXm/pJPBH4A2NcoMZeE5GlSXOkg6biO91MPgdQAbP1w5qRVK9zbnvKwWybXKb/TdOkjanjiVlOE1286Dn3j5q+DtaR/DvgBY9jNUDB0DdvAHdyQjkbvqjyXah+48MqMKp3NupYrooIgiO4LUDdTdSldJg4oDnq817xeWlmhGereG+V2NDRnz8DYPdrJo6OUII7+ozBJjosRjJZqT74neqvdefgV8/MAz8MsP3RfnHU4W5QCVd0QARTZ+0X16pXgglPjnJEm5njZvclwYkYvcTSEM5IecZYEXKpMTE/JK6D384wjkb4/ejQumq4PdZf1Os5l/oTYoV00kCJEpzB645kDZyQTgfG1n30QikEEq/VMGEIqXUtdQCcAKtIIdFzfCRsKZZtsG0iJotMueNyqS6ShNljpzqLzocCAg+BwaUhpIe7KXk/dM4SPt9Z02rH/Lrt3wh08+Dr+59xE4lRJNwCjCIZi5HIc3w3AcxjfCYLHGEQib3o6NpQ3Mjp6uQxWA9rAj2lX/5JWvgW+95LKs/WYklc0Os6HSMSotGnGmsomU5kQJVIYydjWDU2C7us6lU77BcUP9emnirwchuLS+Zv63kRYdkynfMGhN3TtJCqIaFFKy4A+wgqRXxfAneEyxFNMVUG+N5sj7r7oO9mzaAv9blNbHs9dlonSLpxABYBykLBs8R1ph2krQAngrs0DgZmmuP60qpwhld6weLp6swK+//k3w6u3nZxNDwByUuaHALYAOlo4x2iSQe66+OwwCYuOX5tyQGQq2dTqcwxVY4t5G0uPwXFwX6l4mrZEWgpIlLKor+upileX5Ym3UOrbmZ3QI6sSbHTOlHWbBPvM3on39qvPPgx+9+/PwRHTzsWjX4GTpjKrTDYVUW6gN6IM6tWAOL4sQYKBua9paQ/SFJWamrSo2bYbfueGtAzDro2+B2REcWoeW6MGWbSkFhxtqhczNAGbRlnlYNJxZNpxD2mX6COLwRnNixj9cz/0rBgOtDwp8dF/zno8kmVvteu2W7fCrr78BLkoLmye1TFPLlhrukFWGLzo8jXw05z4HvJxjsyDX0quSUNb73Rzjf/N1b4IrN2+pYO7L0fcwvmWyVn3QALWTBmJzEyDlKwZsdEiSyhKvegO6f8OY8TsvVdp5sRr/ui9WBw4qa0vlxgNk02YDPMt173ivN1RddyBed8e1W7fBb0dPyBagtaB94wEqqylsrP+DqjDwywz+0IlEPyB4VW2lYFCMKVtUhNkMfj7azFdu3poBvM5gdpI5gxvqN7cayPPUod9mOf121FA4QLEmHWGABu6aGMwnYKDOFx0vVdrR9GDrxSc8bezrzQffTrzywqS5lTUdJr6haVP7roXazuuUJv1etmkr/PT1r8wCToN6gF0vPNER3sKnGmS2306ZI5HtbIdlWrlVtkhOYP5AHBi8e/fFUjEBtTv0xucMYgE4wGAHWi+5tdS4dss2KHYYGrFleRHUOJElFplMga6VoMCRAxZc4waePae8pV+GKoFd29kxMXVaSp037HG8Np2l0YFyeyAd6lltcmTJDOVYU3HfEv3W358+x5uVcVXGClHklbwZ3Noq1Yo1wuLXrRoZFdwSBUEbBMVESlskvyqqme+Mg4Je+ZhbPV8kQG+vPWKD+pUSdT5E0jt27C43mvyocAiidSiepjnrErX+2QYrFlzDBp49p7xFyhH9pUe6p+jJUCU9R31TFDYiSPQBVUiYNoDKd/DtF6yEZxD3wQqx74mAvnrTpgzoIJMMWDMUTJ1baAPaZ4g1PkiN1G8oPSrQILCLhP5InMK+cLqpAlnZzTPFjL53IFUMazKTy1MdQXeOH7z0Srgu2ut17epGPQjwQYMXB4leYNhoo5xLIypa1Xsdhluo40udE2+u2bwZvvviy9rjGA9saJsecg8aZkivzA5lelwQvV3/8NqXw2w2K4PEXm0wDgCGD9KrYNgsI6BfOChEWCClGOBU2z5K59dt2w7v2nWRVJQrpE0LPb3N6o7pbOBZ953BoRti12QVfvaKl0cpsBlkyznJQzMrEB898AMMnbLncsBLnD6AbnypR4BBXYJOE5l01epm+PHLrxWBMwsLvEtt7EBotQmDnto15w9qvBSPr9mxC752x84ipUN1OdbC69ziMkFjdKojszkRQrNSOgbliTrNyv7mZDt/Z5w4SSKhNdhoTW97Bo2FIKWWIPtGh+oDTRL7TVvPh//76lfBfzj8LNx04hjsWz9b3u7Ls2MBZEbFuQXqYBEWE8IsWCaElzAtAAE5WAQy4Gn/m0k8rooA/przt8P7d10KO+Lkx3oYd5kOMDZGQgDxG3DQryuke6mMVKX8Bkc8X8UJfOtFe+AThw/n5eOwo0y4QxIOB+MBqPc8G6QZr/zc54Khbiwl9yRmlJIU6R2NZOj3a+tw9XQFfv+Nb4Wt3VTUTFY7oLwZWiipopbqlGgHRfqrCfP5fGfvySCqYRsvwo+wgXnOeVTz1CUcVsV3xrFyWhdhIWGNfILVYPyrJSW3j0jSoDxNUCXuouB5qj+p4+8Lk+Rc6cpMXvo906/D++74FDwXZuo7w5RJZ8c22mMl5gcOC6fQ3tZtNDiZGhTz8vbIM3jHzj2wXfX+BGRjZsBiMGsKsEWCAk2vHkg/HVeqr9O1MgseKrCNlFV5oqNBbrtxCzSJs7QMgmOvATnXqdETmnkpAseEQQvQRlsqU3AWbHuMgVnzReKUlEZVJn9bkLUoS+oE8FCmx7/9kj3wm0/ui2OuXjZ6KjPPAIOGyVEIi4Te+PvQwVLcYnQVA8U266O58b7o2WBm8K+RyP1iMAdXDEtkRY6pL4M6v/mbpA5JZ1ZzvDa2dHpfgKOhiXdsly8NqYGH86VqcHUz5PT1HsC8hGCcA2G8OBEi+lcG51B/Nfh9xwOY3y6jpgfWNpAxFYH6XdHL8hv79kKYTgkYtOmm+WKBrkE34niY/4I/jkVaSBbDvoft0R56RRwQ9r2VBMbPOXi6hnmN0orLL3sqUAeSCtnzgUpCsHRmvsASQQM2OECrziQrbbFBD3Pq1ei4SBfVC1HycvJETK1BXvPAHCyvjaTW5wADIeTzHGsDqQO0EwTVBjKvEEr7vHr7edGWn8Dx7MIjW7qR2+CrtDmFjgO6qU6D+Q2kQ9ldl97ZSB/RejDLyDfUAYNm9Fw1PacOjCEtLVhjZQYqUwOUyTFWPak6g1gBTfZHYWIoE2PChXHpls/RpjP14/yDep46CpepAb3MABpcegYT09gSMqZdXB4Lg2okLXD0hlB6MmYSmfem83bAx44fIQnd1Rfecl4NaQIwt/GW+wSLM/FiRzhTAH11nOI2zApgZv9aDGMA9rA4GFCH2nNR1T+Fju7rdanB9fJWXKtAb37kaIMspWoV6JlWkbzBdQamP9g00ik4bbD1NnnoOLD5mijX0Xr1nO+AXGed91weUcCRa22embKo8Ku3xDmDo4cgKCeDBTAuTwRoQOveYIxUzlSLEBCq2NzI/s0tWw2TmPktuwwABlJkmdACtcRRRjMGOsWZX9daZsDM0b5RqQDhSHDEBKspWCoNaO+H4OOj19KbeaeaQOc94JeOYI0UhvwN7tx3njAn26WDaiCNIoMLrFJ618pqeVUiqK2RWw1l7A4vnapEGF1ON5DI45f5pXrefqSMEqgvXl09J6ZslHEe1PnHixWwDNUiTpsdxmsBMBRPrV/uREoG1AxV52U54B7XhLEnRkwxnT6UTmBkSytoHjQawJM/qFIYz/6cQO2e58O/sZeO5BHLApEJocDv2QudWN8S1PSa5or3pjhCxXyzxc7uBPJyrKrF/7Q0mFvbcwweh9yJmdZBIwZlZzfuWZ0+LKw18NZb1Q1wpKTUoDyv6MCaXKIRejVJ0UKj7jDObhupxvBeWKqvzA1Olw9IDa5T9aqtpjxRQgdrU+ZvS4OKFmpgdLENHdwTvSabDupd2HhUKhLmM/lcwqCXslSkc98pQ+MZnJPvWJwHRl+LFm1g0rPkZomu81BSHdTzHNcaW7SUSIvoMHLOEWO832ibeDDjgnTmmhHu7o7lsSi0AY3zSQmtk/j/bD9rpB420jyh84IDc3TOWKIFiEWNEFS+Bgyq4wiY6ab3agwGfT5/cB1jhLCxDjdicQyfUXTASF6Lgi5Paz7vixYJje2815K5YXo4M9S3nrseabDFEpoNdG1jtDgXw4H03Rice+861zAA7ghKrb1VG0LuKZu49y0W6jNmyarQaDDNrgatetCk+ajBF8bqBjC0+VWn4nGBLr8fo2MD8YvShpEbWpjla1eZo2trdqKLnsqbHcHGQ3sZA+/t0Ht1NVqLXxx//OTz0AxBnhyZcXzhodnwPl4B0WNiEHDeTRATysgSVRizbzApADAwL4LuFOpmcOmXeXndegpgYOJwXPNZeHFDZrcXKmhZe/DMaStZ+I5vUNSN5+6rVza6QYlS1EhmY8THNPcdP9rOQUmkpY6wgbTqWDRRwA0pC3QjyAtLT508XgYbxPBOV1uZMNLowXaUfM+lL8sKQ/2MyjEGNV0ufw8uDVIGCh97jx2SF7DkRSx+bn6zgarOSxsUb5nuFPaePAGAOK6FdMVb9+W6ZLrxL1YG+aLs9bH35EkzA6zbFlzcgkzPOXhADDp+UGCAAoDT62vwU7feCCfXzgy3yZhTzkCdAhg/awZyB+Ir77GCmz9h8p2Ega3rwLQbIEPpdGcj7b92+62wlhaQx9oRDajn0B/ghYPZ8ELFGbrdM3x95+GDwMtL4AtoeH6y8xH+nK+1NMJB4gLq07MZ3HX4kH3DDU2yHIQBYdigoxKW1TLMl8IAI+q1IcH4uP/wAbj38LPw2LGjAzBji3bXQoYOBOvShBYT7XOeZgQHCFQNRuf8WuYjRw7C3QefhYcjMMxWH1jrr/mnJ7n80W/wCHMOUOVKBR1f7z16GI6tr6sNmywP2sbDfNB3vicbZvq8JK1ycgt6u7wA40effdqCYQTUfC70BYB5HVR7DFoEekmsJzs8OBnY6Z3pvBfIU/vyB50373vEbJFhwI2OfvrtB4UrglogpjgvffVvUHXQr7wybXonsdueeAzOhBnc/PhDeaOeCdo3DXGMPGyTvGzABfn5cvnddW0q/dmTT+S94dHZIsVERpMPjuXr7rU/wZL80c6CNbzcslsTrff8n5/cF3vd2YpzsKAGaDBzpCcNJK0CA0uZQXq0z0rHAQUKtRfPegTDBx9/OK9r/JEnH8/7gzDQtQoXm9rTzWVjI16VG3D00VJ1tI0tDYm1ofSmPGlG7EQ0kW6NnTEtKP6XTz2e66K3zht83ADDjq95tdEwT8Nwh2Sa0V2fipL5o88+WRbEz4viE44oB6HTjyLVKTZoqoPCUVGO4FBd+w6DGQuY01cHaW+NTx08INKtpeI1R7TP1khhPtVpggWtJtnYs3T4vqhpYgmdAHHo7Jm8nvEzZ07BbU/vL4DohuobdB1QsUafa3taHbpqZnbP5cv30cWL1ugK3QnQ9xx6FvadeD7TfuDMGfjoE3ulM2pQG23uCYPaDmGePeeO0MjDXxvtAlbz3fLMk/BYHBAWCd3ROtKVIShMrlxo2tjGBOBBoQY16tZxD+pfUzhmwhKg03Zuv/3og1Fa9Haf584x2BXjpzmFIegOxSgNfKQ8AG0dfZnc0FNq+D945AHaT3ElRk7gDx59ANIaHQO6u6G0KwXU8oNli6mLodPfV52iU3XWHUoDuWweG+BPEu0rtNNYPP7r44/k+1NVP94vUH8W5VsQG829TPDmpD40r/QncumYRWz80eN7C16mE6h7lcMAoCBqDsCqe0c0nXeLKWZydbzKHMBK6UjgZw8fhk8ceNbaoyo76bnpYTWAMJILQQZY5gA7AOMgj9JJLrdTQAb1fRv9fjRK589GKVf2AynA+Pyh5+DmaHrkNJ0FtedfRx0MGuuj67FBa5UjbwJ4a85rEk37Sjw+9fST8JkDz5TOmGmfwO3x+rZYp6kCvv7WUuMBHQIzL5VdE9y9sCCNViWylU2ngKzOb33mqYiRg2WV/7RVCdvRhhEOc9Bo7EYYWTlp/AEDcAXsBOZJ2rh+WnYJ/cUv3Q1HkirvhpIGPXMBmpLLd0gtfX16VCdMYl6DEWGw/Vhi7snZGvzS3Z+j7cZou960oGC8+fN33Zk/4vS2aBMcmpOuIoM06K7pOW0nC5hBgRpq2Qmsa5G2n7/r9kxrJ7SXHVp/8Qt3wrGzpwX8GtiirbpGh/L8bPEch+0DFgbVvFC8zr9Q6DgUafs/vvSFrA0TXspq/938Rm0V7KJ0M7haUHBq0qJQIqXGbAfljesjqO8/cQx+66H7TQ9t2XVjzNJBC785nXNIIsLAK8DH7z98P+w9cTyrvdQJ80HnT0Vb+l/fd4+R5gLmDoZmEMAArEYC6mvFtk5dexOpc+VqcP72/V+CJ6LPP29sSkJkQttR74t26Z/sfUjS+kN3Ri/0/CBca00+b74Oy3UAMB4Wz7e0PevvP/IQ7Dt1qmw0lPZi6SZ1E07B05BAnNfoKtTldEe7HxLDVeaoDHSyfdjLUTeuX4V/F23pv4heD89QM2iBBjhgSAo6svw9n0fnmUkdKn1C/2f7HoV/dd+9tO902egmdcQJb0UWj9+4/4vRJNkvdqsxQbBhRvE5qVyhFRtp6DrofEKVnppfbGLw70eeeBx+6767YbJphWznKe3YOy3aJpog/9e9d8EHH3ukLBvAtndXXXrieXD0MG+D8x0HjXZ0fAcwGiXzvquSeaqOD0Us/OsoSDK/eb/vSfFwaKnG66Ogxp2AvB2Ylo6XVA30LqrYwwDGrgl8nW3CCnIGNw8MJxMyPSLBSSX+7BfugPuPHxEpzcAYmCKKud0yAFdpWGoaNY1qMIWlQdPx8LEj8M8+91k4neIJEJM8mJ3IICXFpy+R/6fPfBIeOHJ4KOXAaprW3uVeeosUVucizdSzvizmVwLzQ0ePwM/dcXve4zGbSStTorsjTVNAjvH3FyLfvxTt1Ck9K/ynQ0tQGTAC2MEjtoFrTCN18GCUtcNKVzvjo8ePwk9/7jMZE4nG6YRox44GhYwnICHJjKo49HjTeGWCO/CR0kVrJtJrOK3qRbr1qvuu7vF9pO/h73/qY/DUqeeNlOPKD4DtQO1tuGYcOHBpqaSkUwLzf3/bR+F4nA6ZrGySBU462ksvg2JSpF3aATVtpfBDH/8oPBif0w017WwjzgOzsSvBSmNtVmg7mQ8GQzqePPk8/Eik/XC0n7u8sWWL9kmW0NN4HItt+IGYfv/zxwywWl4Q7QnhJs3XwQK8C/Y+P5eWJBC6QbUvnT8daX//rTfDmSTwWCtOaTBoGlrkp+BPRFhLOjfi8Jq777ZmqTeSsMTJJzLKuDIfNvI6ZbQc2PraOqyfPQuzeKydOg07I/H/z9e/G1523gV1ERq1ao9fxXKMFEt9Za6W7hpszOj90V7+7ls+BIfixEnatndKG0VOaC89pDLSAoJ9JGx97Wykfy3vTb5ndTP8+298D1y6bbssnCOL6GClmd/h0DSHEdqZnZn+INURAE2hStEnjh+Dv3fLTXAg0lRoX420k4RTtCfez/pZoZtov2LTFvj1r3sXXHXe+WZpW1lkJkBzNasgRDqWV9w1B9zaPEudKAmDf/DJKNDiZFvexD7SzzvNdnkTe16irQ5OMsidLc2Se8BMB+rJjh/+4f8F5gXUDzHruDx1DaxeiSiAahvFcDLODP3Row/BVdu2wSsuuADqrBAMTQgYSl4ttb1fU2zkzrrlsrqNx3+JNvMPfvwWeD7Fpf2naQ/qTjZT76qGEW3TSWHHYqf8k0cehiu2b4NX7txR6Waed65DUaWEXufZYfWuTZiJphlrPT6yfx/8yMf/Eg5HbZGBvKlIuMmAdiKEAA4EiuRp+qM4lnlZBPT1519glKqx7xVfEYbnk86acVrbshZc0b8x/qZo7//EZ2+DgyxEEqBXqqmU7WfXuIXvAjBiXrUUKtBUI8wF9NiDgzgEh2eTRNs6DP61KEFujJWcxd/E3G3J3tNMhSG4NXM7BQ593emBlDIzjsXG/K0Hvgi/GAdJZ7ATIBdATCoglC9LQN0RE2mvw1NR69y0b1/+oPOa886D80Zo9+aQNkUMQBqAnlJ8+j0ZJdov3fU5+OV774aTKT7SvbKpRXsnTKu0E7CJiLUofv/8sUdz21x7/vmwPdEOli5PoxEg6toM7qE9eH0+8v1f3veFyPfPw6mYMG9kT6ZQcZFW2mUDUGIceheYs6PngTlHDUyOFEbeAA+ik/oq+vvyxXf169BC1oEWcEzmx/paND3Ws/nBZsjVm7fAT7z+q+Cdey6PDOkG664xGU1KcAh+bYOeiRLhtmefjgOjO2FvtN+K5yKZGKt5AiK7ubqJME73fl7ZMn9aH9X3bD3RT+bTWqrHGlweaf+ZN78Fvv7Sy/KAzK8IZNQ22DpgY9aQ9yzqch49fPqZZ+CffvqTcSr+tKO9uOk6nioeoT0RMiPaZ5n2tczzRPsroqT+4de8Hr7h0itz6WZrEGi76wy9CmsT/qXzNAP4mQNPwy/f8zl44Pnj0RNDAmS1emTy/t9KIxpTg8EdQIHcSWeDg3mA1jf79rIvZhlT/rDR2NIAvKQBr4Bd1rxbz4ydra1npiZw9BEcIca9bfdF8J3XvBzefdmVsGU6ta84wpCxqOpiJEk8PxE7zs3RNfSf47Tqrc8+lScdpnkWjcAgdudEADEaAtAq831enDuDOY0Loh3bn020z+CrL74Y3nfttfBNV12Vpd5gSVq0tOuLTL+yoY9Ge/fWOPv3+w8+CHcefC6q47Qh/JRUdOmIxW/bKdpHVKTQXkGd6M/AjnXoYn1eu2MnfMe1L4f3XH41bIt80qtc8a8Onu9a2xyPPLk9Avl3H7ov0n6gDFizRF6VafmJTHNP8kNDMAOYUT8BGnXB8r1hI9B9vPaeeyrt/EAIlVXaCB8MDivajJSmDhFohfZAA60C7JlIugRqZvY1ccD1jXuugG+/5jp4ZWR2KrQlJTSDS90C3HP4UDZl/mTvI/DM6VNlKpt8s8zQjtR0deRzvii4EJ4BrUUSaBFKBsdaAkcBxSw2YqpLH+m/aus2eOell8L7XnYdvCl2UNmPRPjW6JBQAH3Xc8/Bjfsehz999FF4+vQpmiyZin9cBq5Tol1UNEiDq2ar3CJQ8+ZNBdhr0jHT0sepPa7del7eb/19174MXnXBTuClxlvaUWMuCbG7Dz0Ht0Zf/QejAHni9IncCQvPiwDp2MRIbsWueGOA5ityfmn/9XTSVds5l58L6gSnAuKgpAEUya35mqHKgJYIboMgzW1upLWg7ar9UJpfJHZGcr6OrAQkSd0rEySBOAFhRkdibmJ4ktipEc6PDfrmCy+Ga7afBxdG9X5+sh+JgLWYz/FoXx6MnpO9cTbyzgiIw2tnyjsBNEvJEw1ZKrB7iyRbp2xOgkRFXf6rUVjq03OnTEeiN0vsdalHn4AdwZHqd0Es780XXQTXRFt195bNcEGincpKtuzRqJ0OnY60R8/F5yPtB8+cNTOs2Q+eNEukP7vjplUqi5mhGzV3HKwLs7DJpMxD9twk/s4GtJf6JNp3Rtpft+vC7InavXlzHCes5vXnUogp8uD4udjpHovmxF1RixyJnRrFB86TJVM5Ty5QZD851lFlBm1nB4DJdg7GxKjnDDcWQlxngKGSzYCGVhizo/meA3WGtTJDyAdW05NbLzO2nxWJvb4uUruAYpalSU8bsvRkk4vIMHqvU7OTXQX0ZCqDJlZx7O+UKVbdc1HLzGDrzp0V2Kb2wE6dcVb2CyHaWRsF3gXJ85JUbWrUTDcN7jKQJ9OqSQztRL+g2dPebjutZRI9zPvAZghpzcT7zHfZnaov30XrsZIMygotQhdpDn6Hp+NOyG0y6Spw2dRA6/bRAG4OBFth5N507gMNR7CVZ6yuS/dJdMoH4lyBQFvzpsqnDYUmHc009qUh+8QIZuiMVCRtbxF6JWmG6gZI4qK8utoViUHqLcejArLoTPVrEUKVq4BG6qBZgmA5WFp2swn00zhJQ2BIC75nLUQ7pga/vpfy+Ajtk05evUUBwRzaofFrQgC2eVghs/RLwOr7JB2TCRP5nrXKtPB9VjsrjPGdaJeX8h3txa9M8ZjukX0iLjkE4xoCBWapTwPMWgCN1ruEja0+ajLkxkKoi9xpUEvXjrf7AuJU2QQOJID0XWZiVqWRKazaZTMZ9qAAGCM0k9LV/bxRqWQUkNMLUwbAlXFo6qUrF4oECUGtA106dx7ERTDk1wQS7dRJQ+pM3AFZktPoVvY/UdKg0K20hjmQ7HwE80qlp320UQvRTdonpNozj0t5YdIX2jXfaYJM+J6Obg7tJIUHmlAdAzCjm53WUrpVJTkfB3MK87ek8NcmKS/oSAAQBhCoZRVwECAH0AwuwM62VPo0ui9xxUwJ4vrLwHKjKv0yS/W9FjUIZI8NmCXPcSbYZpjaQAXVaMvQnssk2vtUZho4VrNKz6AuTTv7wVu0E78r7Ypo075YtaVI6hbtSUqHzHfueL3srxdqHTiPIu6HtJP/3ggWJzw8sOvzmnjbHrgAtPPCdID4RZlpTwjSICr34I7AX6RRYQOafJH91KoiWVqTfZx/J50CBVTGUnrJ34AUrY2pQbsIzD54aZCL6/NC7kHVveTYZ6lXBiwh84D3Aay0g6IfLO2IDiScxA1ccQHtWvAgOl5pkms65HwTnV2QjhkE1OD4DoYW4bumXUtZHSevH+pnoKaFeo4D3jfqOicsb3IMCiJQA3diRQ1J7jwY6INdEQgnWU2D8BZFMiCbLZSH2WAueJsDrOo1IKZ8jIRGWwd5RpUpZCqpyvqWO1w2RZj4yQjtQeUFA1ygq8eARlyedqx2jOOXTT+gXQ1YBdx0rbvfwFyaR7t0QAAZ+Ml9UJ1X5aE6wQsFcwpTjbVmUBWVtHwyCupQJFpKlE0KxewQSJqTVOPGR8pUhFooDGBJgR1UicP54RDQAIBO5QV9XzO2PmJPVQ+sp1ReNjPSNfnaNY8g1A1FSL1L5waiGX2h2KAdXN0U0M11bYpyqfilaWfNwlqS8hCNw3wXcwWE/wGHgsTSrujmarBEVmlqvQCqr/nFBXMKZuNNqxhrvj5/c88wiWznTHxhEtLgShqXMFyaVzFZSYKgGbsMHU6CMYil8QXElZm2fjpXMqW4oQgkgW1+BmgyL6h+tSOivDq3iOZKru2QfM31CqoDapkRTI4cF1Q+NTGbbTJ2z0IGlKSu6ZaiGSzfmc+8KLmhnUAr5ikDGXGw4ZW0G8LAyGydt/hsTI5Bp9C/oma5cCApCwLKoOINgVoqAJJkhjpBg1WKo86EH2MbW2qAhglYiTRSgJlHlqq6Jyn0IxIbGBcQNANMvVnDBKKd0RKU1gJdd8VHLY1atNdzpElBHKWdfwLUzgdEOypeMFSlGZE1iGpXqhwaLWlpr+RZMGvaUfO9EV/4AnYFWBU/aBPEAZDBXfPvtJVoNKAd+fsGQGJCYG5nSwHNLKKuYHBbSxUQ8iruOOyGo3S5E7TMMw/XnmB/VTkCwlDjURAkibI2MqzO/3WdYJB3m3aFTAI5eoDDCO0WiyBodPtTiMQOoaLJPSwQDUMyxWxxJGnazMcgDhtSjsqjVNcxhdvNlbcURmN66+XwROtrf48yKPdUkRrY8uYUWN3AmBB7SW9xQYl0e4wCQV0oqSESQz/fArDPSC/sAa7uwRPD0ockMxfm9iscFINQeRkqregb3nQAtHVo0WzOcQjaUhFgyVnpINoNwGEIalO+ohNgfudjfqqOizAHS63rFib9L92bbjhTbLSWAU8thIWCrHOlgco2HD2jwQ1BD+Ra4qIWjIY2dUuBxdI9TKvlgDEQdJ1QgxqgaigCJPuv2YaeR7uyK5envUkwKAMGzFggKBAx7SLRg8qXaCeAByZg0Mw4LLFFO0e0OiBWSBth2IBUE2emTBymyxL6XAMDV65BEVh7jICaEykholV6uV0NKA2yprRoE1V/Rhg693F/Txfd6pRMuxoUV6nlM2gV0Cj9y017TqsEi87pXPhO+bQ6oBE+nP9GwLxEOHdAc8HB1boBbNR+WZYaGvgi/eYxcsT+QEePv4HtpMsyzXhwwNPuAMIheDJeGO3nQrce0M2lXZMHG6AdWvSPgNikASvUBnmeO5hTeGGA1gRsANg5WtMtEgSy0h/uOei7MsK4SoTlgTAmIXS80zZMrpSQcNGhnVkz9L8ItGs6WjT6eJ++QTt7c2paR7sZM+j7uDHacUFHWJTWPRZgfpiWdzKU/5Ey1e9D13rj0FdJUjo4aT2UDjZvW+nyE9QFC4eQB5RolEGllU3DlqhRNOtn1L3RJW7RyyVUQABomloZpx1REXj8pX0HjmbK19RaiAaemBnQ7Mod3ENFM+eNdWyQ2cltizUH7o+opLmlGW2nMGmpDYxbF4c0W9IVzTgfdy6PeWmnzDh9Ax0T6qyXTQtgO4GvVKD0qK8BqQJg03K5YGuueA4amrVMUPR48FJa3Umw0iVxaqTcphkkt1J2nbVUpKoGwDbNFG/GMTDkfYnoVL1KJ9kQzahyD5UHmndgylQ059lcrM/pduBidVr0g/OC9ADu+RbNiJYOVQ+NBXR8ZozKfcp78HJSMxNNqAuDwrWKtuLINYh6CtXzXnqbwlpVtfc4b1XVQXLfKXW95tLMZ452uRPCKF0wXqsB7fYe/yyg2WQ3ntaoJcUaQ3urvceq0alpbj3YxAU0y8ts87NvhWYayvuF29Cjpere2mroxjPB3RiIrbFnwOqnpbiyGGBNurmMFg2A42lg7Bl4cWmXPM+R9nk81+rPP78M7Yjzr1+E8P8B0szv+tLrxRwAAAAASUVORK5CYII=';

  return (
    <svg
      {...props}
      aria-hidden="true"
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        backgroundSize: '100% 100%',
        backgroundImage: `url("${img}")`,
      }}
    />
  );
};

export const family = (): WalletProps => {
  return {
    id: 'family',
    name: 'Family',
    logos: {
      default: <Logo />,
    },
    logoBackground: '#C2C9D6',
    scannable: true,
    downloadUrls: {
      download: 'https://connect.family.co/v0/download/family',
      ios: 'https://family.co/download',
      website: 'https://family.co',
    },
    createUri: (uri: string) => {
      return isAndroid()
        ? uri
        : `familywallet://wc?uri=${encodeURIComponent(uri)}`;
    },
  };
};
