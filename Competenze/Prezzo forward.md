---
tipo: competenza
area: finanza
corsi: [Financial engineering]
livello: [magistrale]
aliases: [forward price, "F(0,T)", prezzo a termine, cash and carry, reverse cash and carry, parità coperta dei tassi d'interesse, covered interest parity, prezzo forward con dividendi, dividend yield, costi di stoccaggio, cost of carry]
tags: [competenza, area/finanza]
---

# Prezzo forward

> Il prezzo di consegna di non arbitraggio di un forward: il prezzo a pronti capitalizzato al tasso privo di rischio, corretto per redditi e costi del sottostante.

## Definizione / enunciato
**Teorema** (teo. c05-prezzo-forward): per un'attività senza redditi né costi, con tasso privo di rischio $r$,
$$F(0,T)=S(0)e^{rT},\qquad F(t,T)=S(t)e^{r(T-t)}.$$
Varianti (prop. c05-forward-dividendi, -yield, -valute, -stoccaggio):
- dividendi noti $d_j$ in $t_j$, $I=\sum_jd_je^{-rt_j}$: $F(0,T)=(S(0)-I)e^{rT}$;
- dividend yield continuo $q$: $F(0,T)=S(0)e^{(r-q)T}$;
- valute: $F(0,T)=S(0)e^{(r_d-r_f)T}$ (parità coperta dei tassi);
- materie prime d'investimento con costi di stoccaggio di valore attuale $U$: $F(0,T)=(S(0)+U)e^{rT}$; per beni di consumo solo $F\le(S(0)+U)e^{rT}$.

## Formule chiave
Dimostrazione con le due tabelle di arbitraggio:
- $F_M>S_0e^{rT}$ (**cash and carry**): prendo a prestito $S_0$, compro il titolo, entro short; profitto $F_M-S_0e^{rT}$;
- $F_M<S_0e^{rT}$ (**reverse**): vendo allo scoperto, investo, entro long; profitto $S_0e^{rT}-F_M$.

## Intuizione
Comprare oggi e tenere il titolo fino a $T$ costa $S_0e^{rT}$ (costo del finanziamento): il forward deve costare lo stesso. I dividendi abbassano il prezzo forward (li incassa chi detiene il titolo), i costi di stoccaggio lo alzano. Il caso reverse richiede la vendita allo scoperto: con restrizioni non è un arbitraggio.

## Come si usa
Esempi del libro: $S_0=40$, $r=5\%$, 3 mesi: $F=40.50$; quotato 43 dà 2.50 di profitto, quotato 39 dà 1.50. Indice a 150, $r=7\%$, $q=3.2\%$, 6 mesi: $152.88$ (Hull, lezione). Cambio 1.10 \$/€, $r_d=5\%$, $r_f=3\%$: $F=1.1222$.

## Nei corsi
- **Financial engineering** (magistrale): cap. 5 §§Prezzo forward senza redditi, Sottostanti con redditi o costi. La lezione scrive $r_d$ per il dividend yield, il riassunto $F_0$ e $q$. Fonti: `Libri/Financial engineering/capitoli/cap05.tex`; lezioni d'origine `magistrale/Financial engineering/semeraro/semeraro ordinata/16 - lez 06 marzo e - forward contratti.pdf`, `18 - lez 10 marzo b - forward price.pdf`, `20 - 10 marzo d - Practical Questions Forward Futures price_JH -PROIETTARE.pdf`.

## Prerequisiti
- [[Contratto forward]]: oggetto di cui si cerca il prezzo
- [[Portafoglio replicante]]: replica $h=(-Ke^{-rT},1)$
- [[Opportunità di arbitraggio]]: tabelle dei due casi
- [[Capitalizzazione continua]]: $S_0e^{rT}$

## Porta a
- [[Contratto futures]]: $f(0,T)=F(0,T)$ con tassi deterministici
- [[Rapporto di copertura a varianza minima]]: copertura con futures

## Collegati
- [[Tasso forward]]: stessa logica per i tassi d'interesse
- [[Parità put-call]]: il forward sintetico ha valore $S_0-Ke^{-rT}$
