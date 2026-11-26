---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["Lebesgue measure", "misura di Borel-Lebesgue", "teorema di prolungamento", "teorema di estensione", "completamento di una misura", "sigma-algebra di Lebesgue", "insieme di Cantor", "misura di Jordan-Riemann", "insieme trascurabile"]
tags: [competenza, area/analisi]
---

# Misura di Lebesgue

> La misura su $\mathbb R$ che dà a ogni intervallo la sua lunghezza: si costruisce estendendo la lunghezza dalle unioni finite di intervalli ai boreliani e poi completando.

## Definizione / enunciato
**Teorema di prolungamento.** Se $\lambda$ è σ-additiva su un'algebra $\mathcal A$, esiste una misura $\mu$ su $\sigma(\mathcal A)$ che estende $\lambda$; se $\lambda$ è σ-finita, $\mu$ è unica.

Costruzione (lezioni 3-4):
1. su $[0,1)$, $m([a,b))=b-a$ sulle unioni finite disgiunte di $[a_k,b_k)$ (algebra; $m$ è ben definita e σ-additiva, "misura di Jordan-Riemann"); il prolungamento su $\mathcal B([0,1))$ è $m_{[0,1)}$;
2. analogamente su ogni $[a,b)$, in modo consistente;
3. su $\mathbb R$: $m(A)=\lim_{m\to\infty}m_{[-m,m)}(A\cap[-m,m))$, **misura di Borel-Lebesgue** su $\mathcal B(\mathbb R)$, σ-finita;
4. **completamento**: $\mathcal B(\mathbb R)$ non è completa; $\mathcal L(\mathbb R)=\mathcal F_m(\mathcal B(\mathbb R))$ è la σ-algebra di Lebesgue e $\bar m$ la **misura di Lebesgue**.

## Formule chiave
$$\mathcal F_\mu(\mathcal A)=\{A\cup N:\ A\in\mathcal A,\ N\subseteq\text{insieme trascurabile}\},\qquad \bar\mu(A\cup N)=\mu(A).$$
$\mathcal A$ è **completa** se ogni sottoinsieme di un insieme trascurabile ($\mu(A)=0$) è misurabile e trascurabile.

## Intuizione
La lunghezza è ovvia sugli intervalli; il lavoro è garantire σ-additività e unicità sui boreliani. Il completamento aggiunge i sottoinsiemi degli insiemi di misura nulla, che i boreliani non contengono tutti.

## Come si usa
Esempio della lezione 4: l'**insieme di Cantor** $C$ è boreliano, $m(C)=0$, ma ha la cardinalità del continuo; quindi $\mathcal P(C)$ ha cardinalità maggiore di $\mathcal B(\mathbb R)$ ed esistono sottoinsiemi di $C$ non boreliani: è la ragione per cui $\mathcal B(\mathbb R)$ non è completa. Lo stesso esempio torna nella convergenza quasi ovunque (lezione 7).

## Nei corsi
- **Metodi matematici e probabilità** (triennale): lezioni 3-4; fonte manoscritta. Fonti: `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione03(16-03-23) (2).pdf` (lezione 3, pp. 8-11), `triennale/ANNO 2/metodi matematici & probabilità/2023Lezione04(23-03-23) (6).pdf` (lezione 4, pp. 1-3).

## Prerequisiti
- [[Spazio di misura]]: estensione da un'algebra
- [[Sigma-algebra di Borel]]: definita sui boreliani

## Porta a
- [[Variabile aleatoria assolutamente continua]]: P_X << m

## Collegati
- [[Integrale di Lebesgue]]: integrale su R
- [[Distribuzione uniforme continua]]: probabilità proporzionale alla lunghezza
