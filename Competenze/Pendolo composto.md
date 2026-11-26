---
tipo: competenza
area: fisica
corsi: [Fisica 1, Meccanica]
livello: [triennale]
aliases: ["physical pendulum", "pendolo fisico", "lunghezza ridotta", "compound pendulum"]
tags: [competenza, area/fisica]
---

# Pendolo composto

> Corpo rigido che oscilla sotto il proprio peso attorno a un asse orizzontale che non passa per il centro di massa.

## Definizione / enunciato
Con $h$ distanza tra il perno O e il CM, il peso dà il momento di richiamo $M=-mgh\,\mathrm{sen}\,\theta$, e l'equazione della rotazione attorno a O è
$$I_z\frac{d^2\theta}{dt^2}=-mgh\,\mathrm{sen}\,\theta,\qquad I_z=I_{CM}+mh^2.$$
Per piccole oscillazioni $\mathrm{sen}\,\theta\simeq\theta$ e il moto è armonico: $\theta=\theta_0\,\mathrm{sen}(\omega t+\phi)$.

## Formule chiave
$$\omega=\sqrt{\frac{mgh}{I_z}},\qquad T=2\pi\sqrt{\frac{I_z}{mgh}}=2\pi\sqrt{\frac lg},\qquad l=\frac{I_z}{mh}\ \text{(lunghezza ridotta)}$$

## Intuizione
Si comporta come un pendolo semplice di lunghezza $l$: tutta la geometria del corpo è riassunta in $I_z/(mh)$.

## Come si usa
Esercizio (`Corporigido_Lezione4.pdf` pp. 2-10): cornice rettangolare di sbarrette con $l_1=2l_2$, $m_1=2m_2$, appesa a un lato. $I_{tot}=6m_2l_2^2$, $m=6m_2$, $h=l_2/2$, quindi $T=2\pi\sqrt{2l_2/g}=1.55$ s.

## Nei corsi
- **Fisica 1** (triennale): lezioni del 2 e 4/05/2022. Fonti: `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/CorpoRigido/Corporigido_Lezione3.pdf` (pp. 51-56); `triennale/ANNO 1/fisica 1/Slide e materiale dei corsi/Materiale corso Bufalino 2022/CorpoRigido/Corporigido_Lezione4.pdf` (pp. 2-10).
- **Meccanica** (triennale): esempio di piccoli moti nel manoscritto. $T=\frac12I_z\dot\Theta^2$ e $U(\Theta)=mgh\cos\Theta$ (potenziale), quindi $U''(0)=-mgh$ e l'equazione linearizzata è $I_z\ddot\eta=-mgh\,\eta$, con rigidezza $K(\Theta^*)=mgh/I_z$, pulsazione propria $\omega=\sqrt{mgh/I_z}$ e frequenza $\nu=\frac1{2\pi}\sqrt{mgh/I_z}$. Lo stesso risultato si ottiene linearizzando direttamente $\ddot\Theta=-\frac{mgh}{I_z}\sin\Theta$. Fonte: `triennale/ANNO 2/Meccanica/MeccRazLezioni.pdf` (pp. 172-173).

## Prerequisiti
- [[Rotazione attorno a un asse fisso]]: M = I α attorno al perno
- [[Teorema di Huygens-Steiner]]: momento d'inerzia rispetto al perno

## Porta a
- Nessuno.

## Collegati
- [[Pendolo semplice]]: stesso periodo con la lunghezza ridotta
- [[Moto armonico semplice]]: equazione per piccole oscillazioni
